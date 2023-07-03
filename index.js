const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>
    res.sendFile(__dirname + "/index.html"))

app.get("/about", (req,res)=> res.send("hi"))

app.post("/",function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("RESULT: " + result);
})

app.listen(8000, function(){
    console.log("Port running at 8000");
});