let users = require("../models/user.model")
const {v4:uuidv4}=require('uuid')

//get All User
let getAllUser=(req,res)=>{
res.send(users)
}

//save new user
let saveUser=(req,res)=>{
    const newUser={
        id:uuidv4(),
        name:req.body.name,
        age:req.body.age
    }
    users.push(newUser)
    res.send(users)

}

//update user
let updateUser=(req,res)=>{
    let userId=req.params.id
    let {name,age}=req.body
    users.filter((user)=> user.id===userId).map((selectedUser)=>{
        selectedUser.name=name,
        selectedUser.age=age
    });

    res.send(users)


}


let deleteUser=(req,res)=>{
    let userId=req.params.id;
    users=users.filter((user)=>user.id!==userId);
    res.send(users);

}

module.exports={getAllUser,saveUser,updateUser,deleteUser}