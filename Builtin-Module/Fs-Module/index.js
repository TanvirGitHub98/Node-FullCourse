const fs=require('fs');
// fs.writeFile('demo1.txt',"Hello I have created this file",(err)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }else{
//         console.log("Successful")
//     }
// })


// fs.appendFile('demo1.txt',"I am testing it",(err)=>
//     {
//         if(err)
//         {
//             console.log(err)
//         }else{
//             console.log("Successful")
//         }
//     })


// fs.readFile('demo1.txt','utf-8',(err,data)=>
//     {
//         if(err)
//         {
//             console.log(err)
//         }else{
//             console.log(data)
//         }
//     })


// fs.rename('demo1.txt','demo2.txt',(err)=>
//     {
//         if(err)
//         {
//             console.log(err)
//         }else{
//             console.log("Successful")
//         }
//     })

// fs.exists('demo2.txt',(res)=>
//     {
//         if(res)
//         {
//             console.log("found")
//         }else{
//             console.log("not Found")
//         }
//     })


fs.unlink('demo2.txt',(err)=>
    {
        if(err)
        {
            console.log(err)
        }else{
            console.log("Delete Successfully")
        }
    })