const express = require("express");
const router = express.Router();
const subCtr = require('../controllers/subcategories');
const multer = require("multer");
const {storage} = require('../cloudinary');
const upload = multer({ storage : storage });

// Categories Routes

router.get("/",  subCtr.subctg);

router.route("/new")
    .get(subCtr.newFormsubctg)
    .post(upload.array('Image'), subCtr.createNewsubctg);

router.route('/edit/:id/')
    .get(subCtr.editFormsubctg)
    .put(upload.array('Image'), subCtr.updatesubctg)
    .delete(subCtr.deletesubctg);

module.exports = router;