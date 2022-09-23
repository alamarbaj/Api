var express = require('express');
var router = express.Router();
var {ScheduleAppointment} = require('../controller/appointmentController')

/* GET users listing. */
router.post('/add', ScheduleAppointment) 

module.exports = router;
