const express = require('express');
const {
  register,
  findSchedule,
  findUnfinished,
  findAllSchedules,
} = require('../Controllers/scheduleController');



const router = express.Router();

router.route('/register', register);
router.route('/schedules/unfinished', findUnfinished);
router.route('/schedules/:id', findSchedule);

router.route('/schedules/findAll', findAllSchedules);

module.exports = router;
