const express=require('express')
const app=express();
const userRouter=require('./routers/user.routes')
app.use(userRouter)
app.get('/',(req,res)=>
{
    res.send("<h1>Welcome to the home page</h1>")
})

app.get('*',(req,res)=>
    {
        res.send("<h1>404!! Page not found</h1>")
    })


module.exports=app;