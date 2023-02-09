const Patients = require('../models/patients')


patientsController = {
	getPatients: async (req, res) => {
		const patients = await Patients.find().lean().exec()

		return res.json(patients)
	}
}

module.exports = patientsController
