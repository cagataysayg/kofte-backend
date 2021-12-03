const _ = require("lodash")
const { getOffers, getOfferById, addMessage } = require("../services/offer.services")
const { getAdverts } = require("../services/advert.services")


const getMessagesHandler = async (req, res, next) => {
    const user = req.user._id
    const offers = await getOffers({ user })
    const adverts = await getAdverts({ user })
    const messages = []
    await Promise.all([...offers, ...adverts].map(async item => {
        if (item.messages)
            messages.push({ offerId: item._id, messages: item.messages })
        else {
            const _offers = await getOffers({ advert: item._id })
            for (offer of _offers) {
                messages.push({ offerId: offer._id, messages: offer.messages })
            }
        }
    }))

    return res.json({ success: true, messages })
}


const getMessageHandler = async (req, res, next) => {

    const { _id } = req.user
    const { offerId } = req.params
    const offer = await getOfferById(offerId)
    if (!offer)
        return res.status(400).json({ success: false, message: "offer deleted or not found." })
    return res.json({ messages: offer.messages, me: _id })
}

const sendMessageHandler = async (req, res, next) => {
    const { _id } = req.user
    const { offerId } = req.params

    const offer = await getOfferById(offerId)
    if (!offer)
        return res.status(400).json({ success: false, message: "offer deleted or not found." })

    const { message } = req.body

    const newMessage = { date: new Date().getTime(), user: _id, message }

    await addMessage(offerId, newMessage)


    return res.sendStatus(200)
}

module.exports = {
    getMessagesHandler,
    getMessageHandler,
    sendMessageHandler
}