const { getCategories, createCategory } = require("../services/category.services");

const createCategoryHandler = async(req, res, next) => {
    const { title, parent_category } = req.body

    await createCategory({ title, parent_category })
    return res.sendStatus(200)

}

const getCategoriesHandler = async(req, res, next) => {
    let categories = await getCategories()
    return res.json({data:categories})

}

module.exports = {
    createCategoryHandler,
    getCategoriesHandler
}