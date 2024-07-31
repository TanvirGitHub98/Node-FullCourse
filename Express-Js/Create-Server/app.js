const express=require('express')
const app=express();
app.get('/',(rreq,res)=>
{
    res.send("I am Home page")
})



module.exports=app;