const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientsSchema = new Schema({
	Name: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Patients', patientsSchema)
