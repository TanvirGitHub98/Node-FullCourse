const express=require('express')
const app=express();
const path=require('path')
const userRoutes=require('./routes/users.route');
const { homeController,errorController } = require('./controller/users.controller');
//middleware instant of body-parser
app.use(express.urlencoded({extended:false}))
app.use(userRoutes);

app.get('/',homeController)
app.get('*',errorController)

module.exports=app;
