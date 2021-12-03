const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        parent_category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
    }
);

const Category = mongoose.model("Category", CategorySchema);

CategorySchema.index({ title: 1, parent_category: 1 }, { unique: true });

module.exports = Category;
