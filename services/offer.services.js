const Offer = require("../modals/offer.modal")
var _ = require('lodash');

const createOffer = ({ advert, price, description, spesifics, is_cargo, user }) => {
    return Offer.create({ advert, price, description, spesifics, is_cargo, user })
}

const getOffers = (query, options = {}) => {
    return Offer.find(query, options)
}

const getOfferById = (offerId) => {
    return Offer.findById(offerId)
}

const updateOfferById = (offerId, data) => {
    return Offer.findOneAndUpdate({ _id: offerId }, data, { returnOriginal: true })
}


const addPhotoUrl = (offerId, photoUrl) => {
    return Offer.updateOne({ _id: offerId }, { $push: { "photos": photoUrl } });
}

const addMessage = (offerId, message) => {
    return Offer.update({ "_id": offerId }, { $push: { "messages": message } });
}

module.exports = {
    createOffer,
    getOffers,
    addPhotoUrl,
    getOfferById,
    addMessage,
    updateOfferById
}