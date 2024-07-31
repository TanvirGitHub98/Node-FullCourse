const http=require('http')
const port=3000;
const host='127.0.0.1'
const myServer=http.createServer((req,res)=>
{
    res.end(`Hello I am your server`)
})

myServer.listen(port,host,()=>
{
    console.log(`server is running at http://${host}:${port}`)
})