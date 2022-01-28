const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { cloudinary } = require("../cloudinary");

var date = new Date();

const PublicFileSchema = new Schema({
    name : String,
    myFile: [{
        url: String,
        filename: String
    }],
    deletemyFiles: []    
});

PublicFileSchema.post('findOneAndDelete', async function(doc){
    if (doc) {
        // delete all pdfs
        for (let pdf of doc.myFile) {
            await cloudinary.uploader.destroy(pdf.filename);
        }
    }
});

module.exports = mongoose.model('PublicFile', PublicFileSchema, "publicfile");