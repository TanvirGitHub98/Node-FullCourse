const express=require('express')
const app=express();
const path=require('path')
const userRouter=require('./router/user.router')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(userRouter)
app.get('/',(req,res)=>
{
    res.status(200);
    res.sendFile(path.join(__dirname,'/views/index.html'))
    
})
app.get("*",(req,res)=>
{
    res.statusCode=404
    res.sendFile(path.join(__dirname,"/views/error.html"))
})



module.exports=app;