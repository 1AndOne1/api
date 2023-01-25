const express = require("express")
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();
const main_page = require("./bb/main")
const asta = require("./bb/asta")
const noel = require("./bb/noel")
const juno = require("./bb/juno")
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
app.listen(8005,()=>{
    console.log("8005 port")
})