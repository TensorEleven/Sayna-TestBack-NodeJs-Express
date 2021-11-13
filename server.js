const express = require ('express')
const app = express()
const router = require('./route/router')
const dotenv = require ('dotenv')
const path = require ('path')

const mongoose = require('mongoose');

// Connecting to mongodb database

//mongoose.connect(process.env.URI, {
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    console.log(err)
})

//Environnement configuration
dotenv.config({path : './config.env'});

const port = process.env.PORT

//setting view path
app.set('view', path.join(__dirname,'views'))
app.use(express.static('views'))

//route middleware
app.use(express.json())
app.use('/',router)

//run server
app.listen(port,()=>{
    console.log("server started on port "+port)
})