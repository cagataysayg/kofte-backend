const _ = require("lodash")
const { createOffer, getOffers } = require("../services/offer.services")
const { getAdvertById} = require("../services/advert.services")


const createNewOfferHandler = async (req, res, next) => {
    const { advert, price, description, spesifics, is_cargo } = req.body
    const user = req.user._id
    
    let _advert = await getAdvertById(advert);

    if(!_advert) return res.status(400).json({error:true,message:"Advert not found."})
        
    if (!advert || !price || !description || !spesifics || !is_cargo)
        return res.json({ success: false, message: "any data not provided" })

    try {
        const offer = await createOffer({ advert, price, description, spesifics, is_cargo, user })
        return res.json({ success: true, data: offer })
    } catch (e) {
        console.log(e)
        return res.json({ success: false })
    }



}

const getOffersHandler = async (req, res, next) => {
    const adverts = await getOffers({}, {})
    return res.json({ success: true, data: adverts })
}

module.exports = {
    createNewOfferHandler,
    getOffersHandler
}