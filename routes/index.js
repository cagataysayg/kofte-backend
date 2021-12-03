const express = require("express")
const { signInHandler, signUpHandler } = require("../controllers/session.controller")
const requireUser = require("../middlewares/requireUser")
const router = express.Router()
const profile = require("./profile")
const adverts = require("./adverts")

router.post('/signin', signInHandler)
router.post('/signup', signUpHandler)

router.use('/profile', [requireUser],profile)

router.use('/adverts',adverts)

module.exports = router