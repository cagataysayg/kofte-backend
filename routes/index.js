const express = require("express")
const { signInHandler,signUpHandler } = require("../controllers/session.controller")
const router = express.Router()

router.post('/signin',signInHandler)
router.post('/signup',signUpHandler)


module.exports = router