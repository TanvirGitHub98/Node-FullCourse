const mongoose=require('mongoose')
const imageSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is required']
    },
    image:{
        type:String,
        require:[true,'image is required']
    },
})
module.exports=mongoose.model('imageFolder',imageSchema)