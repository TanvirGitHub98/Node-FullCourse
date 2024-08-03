const multer  = require('multer')
const path=require('path')

const loadImage=(req,res)=>{
    try {
        res.status(201).sendFile(path.join(__dirname,'../views/upload.html'));
        
    } catch (error) {
        
        res.status(500).send({
            message:' Something Broke '+ error.message
        })
    }
}
  

  const uploadImage=(req, res, next) =>{
res.send('ok')

  }  
  
  module.exports={uploadImage,loadImage};
