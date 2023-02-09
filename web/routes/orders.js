const express = require('express')
const router = express.Router()

const schema = require('../config/schema')
const validateMiddleware = require('../config/validateMiddleware')
const ordersController = require('../controllers/ordersController')

router.get('/:patientId', ordersController.getOrders)
router.post('/:patientId', validateMiddleware(schema.postOrders), ordersController.postOrders)
router.put('/', validateMiddleware(schema.putOrders), ordersController.putOrders)
router.delete('/', validateMiddleware(schema.deleteOrders), ordersController.deleteOrders)

module.exports = router
