const Offer = require("../modals/offer.modal")
var _ = require('lodash');

const createOffer = ({ advert, price, description, spesifics, is_cargo, user }) => {
    return Offer.create({ advert, price, description, spesifics, is_cargo, user })
}

const getOffers = (query, options = {}) => {
    return Offer.find(query, options)
}

const addPhotoUrl = (offerId, photoUrl) => {
    return Offer.updateOne({ _id: offerId }, { $push: { "photos": photoUrl } });
}



module.exports = {
    createOffer,
    getOffers,
    addPhotoUrl
}