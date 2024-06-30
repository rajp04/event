const Router = require("express")
const { NewEvent, Events } = require('../controller/eventController')
const JwtVerify = require('../middleware/auth')
const router = Router()

router.route("/event").post(JwtVerify, NewEvent);
router.route("/allevent").get(Events);

module.exports = router