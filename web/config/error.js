class ValidateError extends Error {
	constructor(message) {
	  super(message)
	  this.code = 400
	  this.message = message
	}
}

module.exports = {
	ValidateError,
}
