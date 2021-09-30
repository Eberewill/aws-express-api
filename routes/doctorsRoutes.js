const express = require('express')
const { createDoctor, getDoctors, getDoctorById } = require('../controllers/docController.js')
const router = express.Router()



router.route('/').post(createDoctor).get(getDoctors)
router.route('/:id').get(getDoctorById)


module.exports = router
