const Advert = require("../modals/advert.modal")
var _ = require('lodash');

const createAdvert = ({ title, budget, description, spesifics, is_cargo_accepts, user }) => {
    return Advert.create({ title, budget, description, spesifics, is_cargo_accepts, user })
}




module.exports = {
    createAdvert,
}