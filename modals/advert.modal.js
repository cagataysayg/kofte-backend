const mongoose = require("mongoose")

const AdvertSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, minlength: 10, maxlength: 500 },
        budget: { type: Number, required: true, min: 0 },
        description: { type: String, required: true, minlength: 20, maxlength: 1000 },
        specs: [{
            spec: { type: String, required: true },
            desc: { type: String, required: true },
            mandatory: { type: Boolean, required: true, default: false }
        }],
        is_cargo_accepts: { type: Boolean, required: true, default: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
        active: { type: Boolean, default: true }
    },
    { timestamps: true }
);

const Advert = mongoose.model("Advert", AdvertSchema);

module.exports = Advert;
