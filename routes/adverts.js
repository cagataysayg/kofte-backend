const express = require("express")
const { createNewAdvertHandler, getAdvertsHandler } = require("../controllers/advert.controller")
const requireUser = require("../middlewares/requireUser")
const adverts = express.Router()

//create new advert
adverts.post('/', [requireUser], createNewAdvertHandler)

adverts.get('/', getAdvertsHandler)




module.exports = adverts