const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var methodOverride = require('method-override')

const app = express()
const port = 3000

const db = mongoose.connection
mongoose.connect('mongodb://mongo/patientOrders')

db.on('error', () => {
	console.log('db connection error')
})

db.once('open', () => {
	console.log('db connection success')
})

app.use(bodyParser.json())
app.use(methodOverride('_method'))

require('./routes')(app)

app.listen(port, () => {
	console.log('app is running')
})
