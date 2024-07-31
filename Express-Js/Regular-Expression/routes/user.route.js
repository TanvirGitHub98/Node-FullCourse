const express=require('express');
const router=express.Router();
router.get('/about/id/:id([0-9a-zA-Z]{4})',(req,res)=>{
    const id=req.params.id;
    res.send(`<h1>Id= ${id}</h1>`)
})

module.exports=router;