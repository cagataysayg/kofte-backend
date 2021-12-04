const express = require("express")
const { createNewOfferHandler, getOffersHandler, updateOfferHandler, getOfferByIdHandler } = require("../controllers/offer.controller")
const requireUser = require("../middlewares/requireUser")
const { getOfferById } = require("../services/offer.services")
const offers = express.Router()

//create new advert
offers.post('/', [requireUser], createNewOfferHandler)

offers.get('/', getOffersHandler)
offers.get('/:offerId', requireUser, getOfferByIdHandler)
offers.put('/:offerId', requireUser, updateOfferHandler)

module.exports = offers