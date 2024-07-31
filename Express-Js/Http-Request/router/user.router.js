
const express=require('express')

const router=express.Router();
const path=require('path');
const { route } = require('../app');


    //req handle with query parameter
router.get('/registration',(req,res)=>{

    // const id=req.query.id;
    // const name=req.query.name
    const {id,name}=req.query;
    res.send(`<h1>Id=${id} and Name=${name}</h1>`)
    res.statusCode=200;
    res.sendFile(path.join(__dirname,'../views/registration.html'))
})

//req handle with Route parameter
router.get('/login/id/:id/name/:name',(req,res)=>{
    const id=req.params.id;
    const name=req.params.name
    res.send(`<h1>User id is=${id} and name is=${name}</h1>`)
    res.statusCode=200;
    res.sendFile(path.join(__dirname,'../views/login.html'))
})

//req handle with  headers
router.get('/contact',(req,res)=>
{
    const id=req.header('id');
    const name=req.header('name');
    res.send(`<h1>User id=${id} and name=${name}</h1>`)
})

//req handle for json data and form data
router.post('/about',(req,res)=>{
    const name=req.body.name;
    const age=req.body.age;
    res.send(`Name is ${name} and age is ${age}`)

})

//Now we will get data from a html file
router.get("/profile",(req,res)=>
{
    res.sendFile(path.join(__dirname,"../views/profile.html"))

})
router.post("/profile",(req,res)=>{
    const name=req.body.userName;
    res.send(`<h1>Name is ${name}</h1>`)

})

module.exports=router;