const { homeController } = require('../controller/home.controller');

const route=require('express').Router();

route.get('/',homeController)


module.exports=route;