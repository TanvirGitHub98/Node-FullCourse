const express=require('express')
const app=express();
const PORT=3000;
const mongoose=require('mongoose')
app.use(express.urlencoded({extended:true}))
app.use(express.json());
//create Schema
  const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    }
  })

  //create model
    const studentModel=mongoose.model('studentinfo',studentSchema);
let dbConnection=async()=>{
   try {
    mongoose.connect('mongodb://localhost:27017/tanvirDb')
    console.log("Database Connection Successful")
    
   } catch (error) {
    console.log("Database Connection Failled"+error)
    
   }
}
app.listen(PORT,async()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
    await dbConnection();
})

//save a student
app.post('/student',async(req,res)=>{
try {
    const studentInfo=new studentModel({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address
    })
    const responseData=await studentInfo.save();
    res.status(200).send({
        message:"Added successfully",
        responseData
    })
    
} catch (error) {
    res.status(200).send({
        message:error.message
       
    })
}
})

//Get All student
app.get('/student',async(req,res)=>{
try {
    const studentData= await studentModel.find();
    if(studentData)
    {
        res.status(200).send({
            studentData
        })
    }
    else{
        res.status(404).send({
            message:"Data Not Found"
        })
    }
    
} catch (error) {
    res.status(500).send({
        message:"Something broke"
    })
    
}

})

//Get Single student
app.get('/student/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        //it will return all the property
        const studentData= await studentModel.findOne({_id:id});
        //------It will return only the selected property------
        // const studentData= await studentModel.findOne({_id:id}).select({
        //     name:1
        // });
        // const studentData= await studentModel.findOne({_id:id},{name:1});
        if(studentData)
        {
            res.status(200).send({
                studentData
            })
        }
        else{
            res.status(404).send({
                message:"Data Not Found"
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:"Something broke"
        })
        
    }
    
    })

    // //Comparison operator
    // app.get('/student',async(req,res)=>{
    //     try {
    //          const studentData= await studentModel.find({age:{$gt:30}});
    //         // const studentData= await studentModel.find({age:{$gte:30}});
    //         // const studentData= await studentModel.find({age:{$lt:20}});
    //         // const studentData= await studentModel.find({age:{$lte:30}});
    //         // const studentData= await studentModel.find({age:{$eq:20}});
    //         // const studentData= await studentModel.find({age:{$ne:20}});
    //         // const studentData= await studentModel.find({age:{$nin:[20,10]}});
    //         // const studentData= await studentModel.find({age:{$nin:[20,10]}});
    //         if(studentData)
    //         {
    //             res.status(200).send({
    //                 studentData
    //             })
    //         }
    //         else{
    //             res.status(404).send({
    //                 message:"Data Not Found"
    //             })
    //         }
            
    //     } catch (error) {
    //         res.status(500).send({
    //             message:"Something broke"
    //         })
            
    //     }
        
    //     })

    //Logical Operator
    
    // app.get('/student',async(req,res)=>{
    //     try {
    //          const studentData= await studentModel.find({$nor:[{age:{$gt:30}},{address:{$eq:'Jessore'}}]});
    //         if(studentData)
    //         {
    //             res.status(200).send({
    //                 studentData
    //             })
    //         }
    //         else{
    //             res.status(404).send({
    //                 message:"Data Not Found"
    //             })
    //         }
            
    //     } catch (error) {
    //         res.status(500).send({
    //             message:"Something broke"
    //         })
            
    //     }
        
    //     })


    ////--------Count, Sort----------

    // app.get('/student',async(req,res)=>{
    //     try {
    //         // const studentData= await studentModel.find({$nor:[{age:{$gt:30}},{address:{$eq:'Jessore'}}]}).countDocuments();
    //         //  const studentData= await studentModel.find({$or:[{age:{$gt:30}},{address:{$eq:'Jessore'}}]}).sort({age:1});//Asc
    //         const studentData= await studentModel.find({$or:[{age:{$gt:30}},{address:{$eq:'Jessore'}}]}).sort({age:-1});//Desc
    //         if(studentData)
    //         {
    //             res.status(200).send({
    //                 studentData
    //             })
    //         }
    //         else{
    //             res.status(404).send({
    //                 message:"Data Not Found"
    //             })
    //         }
            
    //     } catch (error) {
    //         res.status(500).send({
    //             message:"Something broke"
    //         })
            
    //     }
        
    //     })

    //Delete Route
    app.delete('/student/:id',async(req,res)=>{
  
     const id=req.params.id;
     const responseData=await studentModel.deleteOne({_id:id})
     try {
        if(responseData)
            {
               res.status(200).send({
                   message:"Deleted Successfully",
                   data:responseData
               })
            }
            else{
               res.status(404).send({
                   message:"Not Deleted ",
           
               })
       
            }
        
     } catch (error) {
        res.status(500).send({
            message:"Something Broke "+error.message
        })
        
     }

    })

    //update Route

    app.put('/student/:id',async(req,res)=>{
     try {
        const id=req.params.id;
        const responseData=await studentModel.findByIdAndUpdate({_id:id},{
            $set:{
                name:req.body.name,
                age:req.body.age
            },

        },{
            new:true
        })
        if(responseData)
        {
            res.status(200).send({
                message: "Updated Successfully",
                responseData
            })
        }
        else{
            res.status(404).send({
                message:"Failled to update"
            })
        }
        
     } catch (error) {
        res.status(500).send({
            message:"Something Broke "+error.message
        })
        
     }

    })