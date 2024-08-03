const {saveUser,getAllUser,getSingleUser,updateUser,deleteUser} = require('../controller/user.controller');

const route=require('express').Router();

route.post('/user',saveUser)
route.get('/users',getAllUser)
route.get('/users/:id',getSingleUser)
route.put('/users/:id',updateUser)
route.delete('/users/:id',deleteUser)




module.exports=route;