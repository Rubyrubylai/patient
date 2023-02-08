const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

const db = mongoose.connection
mongoose.connect('mongodb://mongo/patientOrders')

db.on('error', () => {
	console.log('db error')
})

db.once('open', () => {
	console.log('done')
})


require('./routes')(app)

app.listen(port, () => {
	console.log('app is running')
})
