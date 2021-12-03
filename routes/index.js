const express = require("express")
const { signInHandler, signUpHandler } = require("../controllers/session.controller")
const requireUser = require("../middlewares/requireUser")
const router = express.Router()
const profile = require("./profile")
const adverts = require("./adverts")
const offers = require("./offers")

router.post('/signin', signInHandler)
router.post('/signup', signUpHandler)

router.use('/profile', [requireUser],profile)

router.use('/adverts',adverts)

router.use('/offers',offers)

module.exports = router