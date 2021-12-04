const _ = require("lodash")
const { createAdvert, getAdverts } = require("../services/advert.services")
const { getOffers } = require("../services/offer.services")


const createNewAdvertHandler = async (req, res, next) => {
    const { title, budget, description, specs, is_cargo_accepts, category } = req.body
    const user = req.user._id

    // if (!title || !budget || !description || !specs || !is_cargo_accepts || !category)
    //     return res.json({ success: false, message: "any data not provided" })

    try {
        const advert = await createAdvert({ title, budget, description, specs, is_cargo_accepts, user, category })
        return res.json({ success: true, advert })
    } catch (e) {
        console.log(e)
        return res.json({ success: false })
    }



}

const getAdvertsHandler = async (req, res, next) => {
    const adverts = await getAdverts({}, {})
    return res.json({ success: true, data: adverts })
}

const getMyAdvertsHandler = async (req, res, next) => {
    const _id = req.user._id
    let adverts = await getAdverts({ user: _id }, {})
    adverts = await Promise.all(adverts.map(async (item) => {
        const offers = await getOffers({ advert: item._id })
        return { ...item._doc, offers }
    }))
    return res.json({ success: true, data: adverts })
}

module.exports = {
    createNewAdvertHandler,
    getAdvertsHandler,
    getMyAdvertsHandler
}