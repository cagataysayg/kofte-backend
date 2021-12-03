const Advert = require("../modals/advert.modal")
var _ = require('lodash');

const createAdvert = ({ title, budget, description, spesifics, is_cargo_accepts, user, category }) => {
    return Advert.create({ title, budget, description, spesifics, is_cargo_accepts, user,category })
}


const getAdverts = (query, options = {}) => {
    return Advert.find(query, options)
}

const getAdvertById = (id) => {
    return Advert.findById(id)
}


module.exports = {
    createAdvert,
    getAdverts,
    getAdvertById
}