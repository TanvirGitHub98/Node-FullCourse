const express=require('express');
const router=express.Router();


router.get("/login",(req,res)=>
{
    res.send("Hello I am from login");
})
router.get("/registration",(req,res)=>
    {
        res.send("Hello I am from registration");
    })
module.exports=router;