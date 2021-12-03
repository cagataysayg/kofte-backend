const mongoose = require("mongoose")

const OfferSchema = new mongoose.Schema(
    {
        advert: { type: mongoose.Schema.Types.ObjectId, ref: "Advert" },
        price: { type: Number, required: true, min: 0 },
        description: { type: String, required: true, minlength: 20, maxlength: 100 },
        spesifics: [],
        is_cargo: { type: Boolean, required: true, default: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        active: { type: Boolean, default: true },
        photos: [],
        messages: { type: Array, default: [] }
    },
    { timestamps: true }
);

const Offer = mongoose.model("Offer", OfferSchema);

module.exports = Offer;
