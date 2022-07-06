const router = require('express').Router();
const {
  findAppointment,
  registerAppointment,
  findAllAppointments,
} = require('../Controllers/appointmentController');
const { verifyToken, verifyAdmin } = require('../Middlewares/authMiddleware');

router.route('/register').post(verifyToken, registerAppointment);
router.route('/:id').get(findAppointment);
router.route('/findAll').get(verifyAdmin, findAllAppointments);

module.exports = router;
