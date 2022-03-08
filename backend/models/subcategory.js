const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { cloudinary } = require("../cloudinary");

const SubcategorySchema = new Schema({
    category: String,
    name: String,
    description: String,
    image: [{
        url: String,
        filename: String
    }]
});

SubcategorySchema.post('findOneAndDelete', async function(doc){
    if (doc) {
        // delete images
        for (let img of doc.image) {
            await cloudinary.uploader.destroy(img.filename);
        }
    }
});

module.exports = mongoose.model('Subcategory', SubcategorySchema, "subcategories");