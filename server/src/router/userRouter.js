const Router = require ("express")
const { Register, Login, Logout } = require ("../controller/userController")
const JwtVerify = require('../middleware/auth')

const router = Router()

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(JwtVerify, Logout);


module.exports = router