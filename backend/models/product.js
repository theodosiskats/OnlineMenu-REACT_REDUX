const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { cloudinary } = require("../cloudinary");

const ProductSchema = new Schema({
    category: String,
    subcategory: String,
    name: String,
    description: String,
    price: String,
    image: [{
        url: String,
        filename: String
    }],
    deleteImages: []  

});

ProductSchema.post('findOneAndDelete', async function(doc){
    if (doc) {
        // delete images
        for (let img of doc.image) {
            await cloudinary.uploader.destroy(img.filename);
        }
    }
});

module.exports = mongoose.model('Product', ProductSchema, "products");