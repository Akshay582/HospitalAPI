const express = require('express');
const router = express.Router();

const docApiController = require('../controllers/doctors_api');

router.post('/:id/create_report', docApiController.create);
router.post('/:id/all_reports', docApiController.allReports);

module.exports = router;