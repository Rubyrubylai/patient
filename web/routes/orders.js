const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/ordersController')

router.get('/:patientId', ordersController.getOrders)
router.post('/:patientId', ordersController.postOrders)
router.put('/', ordersController.putOrders)
router.delete('/', ordersController.deleteOrders)

module.exports = router
