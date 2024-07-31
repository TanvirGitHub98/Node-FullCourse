const express=require('express')
const app=express();
const path=require('path')
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const calculateRouter=require('./routes/calculator.routes')
app.use(calculateRouter);


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/error.html'))
})

module.exports=app;