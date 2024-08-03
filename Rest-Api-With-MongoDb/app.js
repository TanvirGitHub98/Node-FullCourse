const express=require('express')
const app=express();
const cors=require('cors')
const homeRoute=require('./routes/home.route')
const userRoute=require('./routes/user.routes')
const uploadRoute=require('./routes/imageUpload.route')
require('./config/dbConnection')
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(homeRoute);
app.use(userRoute);
app.use(uploadRoute)



module.exports=app;