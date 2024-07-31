const express=require('express')
const app=express();
const cors=require('cors')


app.get('/',(req,res)=>{
    res.send('Welcome to home')
})
app.use(cors);

module.exports=app;