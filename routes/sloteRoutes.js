const express = require('express')
const { addSlot, getSlots } = require('../controllers/slotController.js')
const router = express.Router()



router.route('/').post(addSlot).get(getSlots)

module.exports = router
