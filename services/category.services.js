const Category = require("../modals/category.modal")
var _ = require('lodash');

const createCategory = ({ title, parent_category }) => {
    return Category.create({ title, parent_category })
}

const getCategories = (query, options = {}) => {
    return Category.find(query, options)
}

module.exports = {
    getCategories,
    createCategory
}