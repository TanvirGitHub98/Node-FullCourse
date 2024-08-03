const userModel=require('../models/users.model')
const {v4:uuidv4}=require('uuid');
const { get } = require('../routes/user.routes');
const saveUser=async(req,res)=>{
try {

    let userInfo=new userModel({
        id:uuidv4(),
        name:req.body.name,
        age:req.body.age
    })

    const responseData=await userInfo.save();
    if(responseData){
        res.status(201).send({
            message:" Data Saved",
            data:responseData
        })
    }
    else{
        res.status(404).send({
            message:" Data Failled to  Saved",
            
        })
      
}

}
catch (error) {
    res.status(500).send({
        message:"Something Broke",
        
    })  
    
}
 

} 

const getAllUser=async(req,res)=>{
    try {
        
        const responseData=await userModel.find();
        if(responseData)
        {
            res.status(201).send({
                message:"Data Found",
                data: responseData
            })
        }
        else{
            res.status(201).send({
                message:"Data Not Found",
               
            })

        }
        
    } catch (error) {
        res.status(500).send({
            message:" Something Broke "+error.message
        })
        
    }
}

const getSingleUser=async(req,res)=>{
    try {
        const userId=req.params.id;
        const responseData=await userModel.findOne({_id:userId})
        if(responseData)
        {
            res.status(201).send({
                message:"Data Found",
                data:responseData
            })
        }
        else{
            res.status(404).send({
                message:"Data Not Found",
                
            })

        }
        
    } catch (error) {
        res.status(500).send({
            message:" Something Broke "+error.message
        })
        
    }
}


const updateUser=async(req,res)=>{
    try {
        const userId=req.params.id;
        const responseData= await userModel.findByIdAndUpdate({_id:userId},{
            $set:{
                name: req.body.name,
                age:req.body.age
            }
        },{
            new:true
        })

        if(responseData)
        {
            res.status(201).send({
                message:" Data Found",
                data:responseData
            })
        }
        else{
            res.status(404).send({
                message:" Data Not Found"
            })
        }

        
    } catch (error) {
        res.status(500).send({
            message:"Something Broke "+error.message
        })
        
    }
}


const deleteUser= async(req,res)=>{
    try {
        const userId=req.params.id;
        const responseData=await userModel.findByIdAndDelete({_id:userId})
        if(responseData)
        {
            res.status(201).send({
                message:" Data Deleted Successfully",
                data:responseData
            })
        }
        else{
            res.status(404).send({
                message:" Data Failled To Delete"
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Something Broke "+error.message
        })
        
    }
}

module.exports={saveUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser

}
