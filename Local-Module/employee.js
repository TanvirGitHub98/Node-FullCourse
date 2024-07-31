const empName=()=>
{
    return "Tanvir Hasan"
}
const empAddress=()=>
{
    return "Khulna"
}
const age=()=>{
    return "80"
}

//export local module individually
// exports.name=empName;
// exports.address=empAddress;
// exports.age=age;

//export local module combinely
module.exports={
    empName,
    empAddress,
    age
}