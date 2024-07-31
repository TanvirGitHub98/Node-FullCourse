const express=require('express');
const router=express.Router();
const path=require('path')
router.get('/registration',(req,res)=>{
    res.statusCode=200;
    res.cookie("name","Tanvir")
    res.append("id","1900")
    res.sendFile(path.join(__dirname,'../views/index.html'))
})

router.get('/login',(req,res)=>
    {
        res.status(200)
        res.sendFile(path.join(__dirname,'../views/login.html'))
    })


module.exports=router;