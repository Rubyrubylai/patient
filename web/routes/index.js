module.exports = (app) => {
	app.use('/patients', require('./patients'))
	app.use('/orders', require('./orders'))
	app.use('/', require('./routes'))
}
