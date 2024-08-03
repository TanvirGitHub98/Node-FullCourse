const {uploadMyImage,loadImage} = require('../controller/imageUpload.controller');
const multer  = require('multer')
const route=require('express').Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const imageName=Date.now()+ "-"+file.originalname
      cb(null, imageName);
      
    }
  
    
  })
  const upload = multer({ storage: storage })



route.get('/upload',loadImage)
route.post('/upload',upload.single('image'),uploadMyImage)

module.exports=route;