const mongoose=require('mongoose')
const config=require('./config')

mongoose.connect(config.db.url)
.then(()=>{
    console.log('Database connected successfully')
}).catch((err)=>{
    console.log('Error'+err)
})