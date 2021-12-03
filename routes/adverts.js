const express = require("express")
const { createNewAdvertHandler } = require("../controllers/advert.controller")
const requireUser = require("../middlewares/requireUser")
const adverts = express.Router()

//create new advert
adverts.post('/', [requireUser], createNewAdvertHandler)

module.exports = adverts