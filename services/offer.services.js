const Offer = require("../modals/offer.modal")
var _ = require('lodash');

const createOffer = ({ advert, price, description, spesifics, is_cargo, user }) => {
    return Offer.create({ advert, price, description, spesifics, is_cargo, user })
}


const getOffers = (query, options = {}) => {
    return Offer.find(query, options)
}

module.exports = {
    createOffer,
    getOffers
}