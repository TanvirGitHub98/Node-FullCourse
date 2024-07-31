const { 
    getAllUser,
    saveUser,
    updateUser,
    deleteUser
     } = require('../controllers/user.controller');

const route=require('express').Router();

route.get('/user',getAllUser);
route.post('/user',saveUser)
route.put('/user/:id',updateUser)
route.delete('/user/:id',deleteUser)


module.exports=route;