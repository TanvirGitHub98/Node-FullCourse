const express=require('express');
const { userController,userSaveController } = require('../controller/users.controller');
const route=express.Router();

route.get('/user',userController)
route.post('/user',userSaveController)


module.exports=route;