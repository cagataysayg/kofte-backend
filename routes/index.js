const express = require("express")
const { signInHandler, signUpHandler } = require("../controllers/session.controller")
const requireUser = require("../middlewares/requireUser")
const router = express.Router()
const profile = require("./profile")
const adverts = require("./adverts")
const offers = require("./offers")
const messages = require("./messages")
const admin = require("./admin")
const { getMyAdvertsHandler } = require("../controllers/advert.controller")



router.post('/signin', signInHandler)
router.post('/signup', signUpHandler)
router.get('/myadverts', [requireUser], getMyAdvertsHandler)

router.use('/profile', [requireUser], profile)

router.use('/messages', [requireUser], messages)

router.use('/adverts', adverts)

router.use('/offers', offers)

router.use('/admin74', admin)

module.exports = router