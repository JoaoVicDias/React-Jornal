const express = require('express')
const moment = require('moment')
const app = express()
const bodyparser = require('body-parser')
const sequelize = require('./util/database')
const indexRouter = require('./routes/indexRoutes')
const Classificados = require('./model/classificados')




moment.locale("pt-br")




// Setting body-parser to accept json 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

// Headers 
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','OPTIONS, GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type ,Authorization')
    next()
})

sequelize.sync()

app.use('/',indexRouter)





app.listen(3001)