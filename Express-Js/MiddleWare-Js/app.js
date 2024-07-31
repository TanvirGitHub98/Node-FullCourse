const express=require('express')
const app=express();
const myMiddleware=(req,res,next)=>{
    req.currTime=new Date(Date.now())
    next();
}
app.get('/',myMiddleware,(req,res)=>{
    console.log("DateTime= "+req.currTime)
    res.send("<h1>Welcome to My Home Page</h1>")
})


module.exports=app;