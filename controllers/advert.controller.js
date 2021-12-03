const _ = require("lodash")
const { createAdvert } = require("../services/advert.services")
const createNewAdvertHandler = async (req, res, next) => {
    const { title, budget, description, spesifics, is_cargo_accepts } = req.body
    const user = req.user._id

    if (!title || !budget || !description || !spesifics || !is_cargo_accepts)
        return res.json({ success: false, message: "any data not provided" })

    try {
        const advert = await createAdvert({ title, budget, description, spesifics, is_cargo_accepts, user })
        return res.json({ success: true, advert })
    } catch (e) {
        console.log(e)
        return res.json({ success: false })
    }



}

module.exports = {
    createNewAdvertHandler
}