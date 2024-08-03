const app=require('./app')
const config=require('./config/config')
const PORT=config.app.port
const chalk=require('chalk')

app.listen(PORT,()=>{
    console.log(chalk.blue.bgRed(`Server is running at http://localhost:${PORT}`))
    
})