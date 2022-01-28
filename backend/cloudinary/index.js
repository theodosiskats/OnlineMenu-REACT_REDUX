const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage} = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'OnlineMenuApp',
        allowedFormats: ['jpg', 'jpeg', 'png']
    }
});

const PDFstorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'PublicFile',
        allowedFormats: ['pdf']
    }
});

// in order to save at the secondary folder you need
// to set multer storage as follows :
// const {secondstorage} = require('../cloudinary');
// const upload = multer({ storage : secondstorage });

module.exports = {
    cloudinary,
    storage,
    PDFstorage
}