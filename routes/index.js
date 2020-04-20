const express = require('express');
const router = express.Router();
const passport = require('passport');

const patientController = require('../controllers/patient');
const docApiController = require('../controllers/doctors_api');

router.use('/patients', require('./patients'));
router.use('/doctors', require('./doctors'));
router.post('/register_patient', patientController.create);
router.get('/reports/:status', docApiController.sameStatus);

module.exports = router;