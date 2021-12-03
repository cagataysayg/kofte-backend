const express = require("express")
const { createNewOfferHandler, getOffersHandler } = require("../controllers/offer.controller")
const requireUser = require("../middlewares/requireUser")
const offers = express.Router()

//create new advert
offers.post('/', [requireUser], createNewOfferHandler)

offers.get('/', getOffersHandler)

module.exports = offers