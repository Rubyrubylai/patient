const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ordersSchema = new Schema({
	Message: {
		type: String,
		required: true,
	},
	PatientId: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Orders', ordersSchema)
