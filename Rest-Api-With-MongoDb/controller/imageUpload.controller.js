
const path=require('path')
const imageModel=require('../models/image.model')

const loadImage=(req,res)=>{
    try {
        res.status(201).sendFile(path.join(__dirname,'../views/upload.html'));
        
    } catch (error) {
        
        res.status(500).send({
            message:' Something Broke '+ error.message
        })
    }
}
  
  const uploadMyImage=async(req, res, next) =>{
     try {
        const userImage=new imageModel({
            name:req.body.name,
            image: req.file.filename
        })
        const responseData=await userImage.save();
        if(responseData)
        {
            res.status(201).send({
                message:" File uploaded Successfully",
                data: responseData
            })
        }
        else{
            res.status(404).send({
                message:" File uploaded Failled",
                
            })
        }
        
     } catch (error) {
        res.status(500).send({
            message:"Something Broke "+error.message
        })
        
     }

  }  
  
  module.exports={loadImage,uploadMyImage};
