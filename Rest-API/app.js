const express=require('express')
const app=express();
const bodyParser=require('body-parser')
const path=require('path')
const {v4:v4uuid}=require('uuid')
const homeRoutes=require('./routes/homePage.route')
const userRoutes=require('./routes/users.route')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//app.use(homeRoutes);
app.use(homeRoutes)
app.use(userRoutes)

module.exports=app;