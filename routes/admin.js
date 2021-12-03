const express = require("express")

const { createCategoryHandler, getCategoriesHandler } = require("../controllers/admin.controller")


const admin = express.Router()


admin.post('/category', createCategoryHandler)
admin.get('/category', getCategoriesHandler)



module.exports = admin