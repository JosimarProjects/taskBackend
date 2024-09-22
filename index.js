const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./config/db')
const consign = require('consign')

consign()
    .then('./config/middleware.js')    
    .then('./api')
    .then('./config/routes.js')
    .into(app)

    

app.db = db


app.listen(3000, () => { 
    console.log('Listening on port 3000')
})