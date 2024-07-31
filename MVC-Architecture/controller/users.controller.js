const path=require('path')
const users=require('../models/users.model.js')

exports.homeController=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/index.html'))
}

exports.userController=(req,res)=>{
res.sendFile(path.join(__dirname,'../views/about.html'))
    
}
exports.userSaveController=(req,res)=>{
    const name=req.body.name
    const age=Number(req.body.age);
    const user={
        name,
        age
    }
    users.push(user);
    res.status(200).json({
        message:"Successfull",
        users
    })


}

exports.errorController=(req,res)=>{
    res.send("Page Not Found")
}

