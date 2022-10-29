// require node_modules

const express=require('express')
const colors = require('colors')
const dotenv= require('dotenv')
const path=require('path')
const expressEjsLayouts = require('express-ejs-layouts')
const routes =require('./router/routers')
const user =require('./router/user')
const mongoDBConnection = require('./config/db')
const mongoTest = require('./controllers/mongoController')

//  enviroment f variables

dotenv.config()
const port = process.env.PORT || 5000;


//  express init

const app = express()





//  data manage

app.use(express.json())
app.use(express.urlencoded({extended:false}))



//   ejs init

app.set("view engine","ejs")
app.use(expressEjsLayouts)
app.set('layout','layouts/app')





//   routs

app.use(express.static('public'))

 

//   static folder

app.use(routes)

app.use('/user',user)
 




//   server listen

 
app.listen(port,(req,res)=>{

    mongoDBConnection()

console.log(`server was running on port ${port}`.bgBlue);


})
