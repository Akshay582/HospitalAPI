const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patient');
const docApiController = require('../controllers/patient');

router.post('/create', patientController.create);
router.post('/:id/create_report', docApiController.create);

module.exports = router;