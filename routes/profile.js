const express = require("express")
const { getMyProfileHandler } = require("../controllers/profile.controller")
const profile = express.Router()


profile.get('/',getMyProfileHandler)

module.exports = profile