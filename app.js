const express = require("express")
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();
const main_page = require("./view/main")
const asta = require("./view/asta")
const noel = require("./view/noel")
const juno = require("./view/juno")
app.use(bodyParser.urlencoded({extended:false}))
app.get('/home', (req,res)=>{
    console.log(req.headers)
    res.send(main_page)
})
app.get('/home/asta', (req,res)=>{
    console.log(req.headers)
    res.send(asta)
})
app.get('/home/noel', (req,res)=>{
    console.log(req.headers)
    res.send(noel)
})
app.get('/home/juno', (req,res)=>{
    console.log(req.headers)
    res.send(juno)
})
app.listen(8006,()=>{
    console.log("8006 port")
})