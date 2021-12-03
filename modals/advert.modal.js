const mongoose = require("mongoose")

const AdvertSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, minlength: 10, maxlength: 50 },
        budget: { type: Number, required: true, min: 0 },
        description: { type: String, required: true, minlength: 20, maxlength: 100 },
        spesifics: [{
            name: { type: String, required: true },
            mustBe: { type: Boolean, required: true, default: false }
        }],
        is_cargo_accepts: { type: Boolean, required: true, default: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        active: { type: Boolean, default: true }
    },
    { timestamps: true }
);

const Advert = mongoose.model("Advert", AdvertSchema);

module.exports = Advert;
