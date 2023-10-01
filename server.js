const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

const methodOverride = require('method-override');
app.use(methodOverride('_method')); 

const PORT = process.env.PORT || 5000
const server = require('http').Server(app)
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', 'views/')

const router = require('./route')
app.use('/', router)

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log('Database Connected Successfully'))
.catch((err)=> console.log(err.message))




server.listen(PORT, ()=>{
    console.log(`Server is Running on Port: ${PORT}`);
})