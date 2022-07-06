const express = require("express")
const authMiddleware = require("../middlewares/auth_middleware")


const {register, login} = require("../controllers/userController")

const router = express.Router()



router.route("/register").post(register);
router.route("/login").post(login);


module.exports = router;



