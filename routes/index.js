const express = require("express")
const { signInHandler, signUpHandler } = require("../controllers/session.controller")
const requireUser = require("../middlewares/requireUser")
const router = express.Router()
const profile = require("./profile")

router.post('/signin', signInHandler)
router.post('/signup', signUpHandler)

router.use('/profile', [requireUser],profile)

module.exports = router