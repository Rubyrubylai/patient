const Joi = require('joi')

module.exports = {
	postOrders: Joi.object({
		messages: Joi.array().items(Joi.string()).required()
	}),

	putOrders: Joi.object({
		ordersId: Joi.string().required(),
		message: Joi.string().required()
	}),

	deleteOrders: Joi.object({
		ordersId: Joi.string().required()
	})
}
