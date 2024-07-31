const {v4:uuidv4}=require('uuid')
let user=[
    {
        id:uuidv4(),
        name:"Tanvir Hasan",
        age: 30

    },
    {
        id:uuidv4(),
        name:"Jobbar Hasan",
        age: 40

    },

]

module.exports=user;