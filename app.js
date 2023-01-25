const express = require("express")
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req,res)=>{
    console.log(req.headers)
    const student = [
        name = "Ivan",
        group = "IS22-11"
    ]
    res.json(student)
})
app.listen(8002,()=>{
    console.log("8002 port")
})