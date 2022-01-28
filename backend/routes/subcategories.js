const express = require("express");
const router = express.Router();
const { isLoggedin } = require("../middleware");
const subCatCtr = require('../controllers/subcategories');
const multer = require("multer");
const {storage} = require('../cloudinary');
const upload = multer({ storage : storage });

// Categories Routes

router.get("/", isLoggedin,  subCatCtr.subctg);

router.route("/new")
    .get(isLoggedin, subCatCtr.newFormsubctg)
    .post(isLoggedin, upload.array('Image'), subCatCtr.createNewsubctg);

router.route('/edit/:id/')
    .get(isLoggedin, subCatCtr.editFormsubctg)
    .put(isLoggedin, upload.array('Image'), subCatCtr.updatesubctg)
    .delete(isLoggedin, subCatCtr.deletesubctg);

module.exports = router;