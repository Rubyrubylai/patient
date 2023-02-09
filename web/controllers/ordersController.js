const Orders = require('../models/orders')

ordersController = {
	getOrders: async (req, res) => {
		const { patientId } = req.params
		const orders = await Orders.find({ PatientId: patientId }).lean().exec()

		return res.json(orders)
	},

	postOrders: async (req, res) => {
		const { messages } = req.body
		const { patientId } = req.params

		let ordersDoc = []

		for (let message of messages) {
			ordersDoc.push({
				Message: message,
				PatientId: patientId
			})
		}

		await Orders.insertMany(ordersDoc)

		return res.json({
			message: 'success'
		})
	},

	putOrders: async (req, res) => {
		const { ordersId, message } = req.body

		await Orders.updateOne({
			_id: ordersId
		},
		{
			$set: { Message: message }
		})

		return res.json({
			message: 'success'
		})
	},

	deleteOrders: async (req, res) => {
		const { ordersId } = req.body

		await Orders.deleteOne({
			_id: ordersId
		})

		return res.json({
			message: 'success'
		})
	}
}

module.exports = ordersController
