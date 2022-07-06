const router = require('express').Router();
const {
  registerHospital,
  findHospital,
  findAllHospitals,
} = require('../Controllers/hospitalController');
const { verifyToken, verifyAdmin } = require('../Middlewares/authMiddleware');

router.route('/register').post(verifyToken, verifyAdmin, registerHospital);
router.route('/:id').get(findHospital);
router.route('/findAll').get(verifyToken, verifyAdmin, findAllHospitals);

module.exports = router;
