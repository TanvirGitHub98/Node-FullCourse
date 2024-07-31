const express=require('express')
const router=express.Router();
const path=require('path')

router.get('/triangle',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/triangle.html'))
})
router.get('/circle',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/circle.html'))
})

router.post('/triangle',(req,res)=>{
    const base=req.body.base;
    const height=req.body.height;
    const area=0.5*base*height;
    res.send(`<h1>Area = ${area}</h1>`)
    
})
router.post('/circle',(req,res)=>{
    const radius=req.body.radius;
    const area=Math.PI*radius*radius;
    res.send(`<h1>Area = ${area}</h1>`)
    
})






module.exports=router;