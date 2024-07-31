const express=require('express')
const app=express();
const userRouter=require('./Routes/user.routes')
app.use("/api/user",userRouter);
app.get('/',(req,res)=>
    {
        res.send("<h1>Welcome to the home page....</h1>")
    })
app.get("*",(req,res)=>
    {
        res.send("Error 404... Not Found");
    })

module.exports=app;