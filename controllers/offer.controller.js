const _ = require("lodash")
const { createOffer, getOffers, getOfferById, updateOfferById } = require("../services/offer.services")
const { getAdvertById } = require("../services/advert.services")


const createNewOfferHandler = async (req, res, next) => {
    const { advert, price, description, spesifics, is_cargo } = req.body
    const user = req.user._id

    let _advert = await getAdvertById(advert);

    if (!_advert) return res.status(400).json({ error: true, message: "Advert not found." })

    if (!advert || !price || !description || !spesifics || !is_cargo)
        return res.json({ success: false, message: "any data not provided" })

    try {
        const offer = await createOffer({ advert, price, description, spesifics, is_cargo, user })
        return res.json({ success: true, data: offer })
    } catch (e) {
        console.log(e)
        return res.json({ success: false })
    }



}

const getOffersHandler = async (req, res, next) => {

    const offers = await getOffers({ user: req.user._id }, {})
    return res.json({ success: true, data: offers })
}

const getOfferByIdHandler = async (req, res, next) => {
    const { offerId } = req.params
    const offer = await getOfferById(offerId)
    if (!offer) return res.status(404).json({ success: false, message: "offer not found" })
    return res.json({ success: true, data: offer })
}

const updateOfferHandler = async (req, res, next) => {
    const { offerId } = req.params
    const offer = await getOfferById(offerId)
    if (!offer) return res.status(404).json({ success: false, message: "offer not found" })
    let newData = { ...offer._doc, ...req.body }
    let newOffer = await updateOfferById(offerId, newData)
    return res.json({ success: true, data: offer })
}

module.exports = {
    createNewOfferHandler,
    getOffersHandler,
    updateOfferById,
    updateOfferHandler,
    getOfferByIdHandler
}