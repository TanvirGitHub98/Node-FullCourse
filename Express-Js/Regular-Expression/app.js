const express=require('express')
const app=express();
const userRouter=require('./routes/user.route')
app.use(userRouter)
app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})
app.get("*",(req,res)=>{
    res.send("Error 404 page not found!!!")
})

module.exports=app;