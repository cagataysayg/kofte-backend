const _ = require("lodash")
const { createAdvert, getAdverts, getAdvertById } = require("../services/advert.services")
const { getOffers } = require("../services/offer.services")
const { getUserById } = require("../services/user.services")


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
    const _id = req.user._id
    let query = {}
    if (_id) {
        query = { user: { $not: { $eq: _id } } }
    }
    const adverts = await getAdverts(query, {})
    return res.json({ success: true, data: adverts })
}

const getMyAdvertsHandler = async (req, res, next) => {
    const _id = req.user._id
    let adverts = await getAdverts({ user: _id }, {})
    adverts = await Promise.all(adverts.map(async (item) => {
        let offers = await getOffers({ advert: item._id })
        offers = await Promise.all(offers.map(async (item) => {
            const user = await getUserById(item.user)

            return { ...item._doc, user }
        }))
        return { ...item._doc, offers }
    }))
    return res.json({ success: true, data: adverts })
}

const getMyAdvertByIdHandler = async (req, res, next) => {
    const _id = req.user._id
    const { advertId } = req.params
    let advert = await getAdvertById(advertId)
    let offers = await getOffers({ advert: advertId })
    offers = await Promise.all(offers.map(async (item) => {
        const user = await getUserById(item.user)

        return { ...item._doc, user }
    }))
    advert = { ...advert._doc, offers }

    return res.json({ success: true, data: advert })
}

module.exports = {
    createNewAdvertHandler,
    getAdvertsHandler,
    getMyAdvertsHandler,
    getMyAdvertByIdHandler
}