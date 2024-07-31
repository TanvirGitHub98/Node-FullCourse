const { getHomePage } = require('../controllers/homepage.controller');
const route=require('express').Router();

route.get('/',getHomePage)


module.exports=route;