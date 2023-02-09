const { ValidateError } = require('./error')

module.exports = (schema) => {
	return (req, res, next) => {
		const validate = schema.validate(req.body)
		if (validate.error)
			throw new ValidateError(validate.error.message)

		return next()
	}
}
