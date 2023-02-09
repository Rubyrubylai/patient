const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var methodOverride = require('method-override')

const logger = require('./config/logs')

const app = express()
const port = 3000

const db = mongoose.connection
mongoose.connect('mongodb://mongo/patientOrders')

db.on('error', () => {
	logger.error('db connection error')
})

db.once('open', () => {
	logger.info('db connection success')
})

app.use(bodyParser.json())
app.use(methodOverride('_method'))

require('./routes')(app)

app.use((err, req, res, next) => {
	// 統一處理自定義的 error
	if (err.code)
		return res.status(err.code).json({
			code: err.code,
			message: err.message
		})

	logger.error(err)
	res.status(500).json({
		code: 500,
		message: 'server error'
	})
})

app.listen(port, () => {
	logger.info('app is running')
})
