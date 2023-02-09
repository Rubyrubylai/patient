const mongoose = require('mongoose')
const Patients = require('../patients')
const Orders = require('../orders')
const patientsSeed = require('./patients.json')
const ordersSeed = require('./orders.json')

mongoose.connect('mongodb://mongo/patientOrders')

const db = mongoose.connection

db.on('error', () => {
	console.log('db connection error')
})

db.once('open', async () => {
	for (let patient of patientsSeed) {
		const addedPatient = await Patients.create({
			Name: patient['Name']
		})

		for (let order of ordersSeed) {
			Orders.create({
				Message: order['Message'],
				PatientId: addedPatient._id
			})
		}
	}
	
	console.log('finish adding seed')
})
