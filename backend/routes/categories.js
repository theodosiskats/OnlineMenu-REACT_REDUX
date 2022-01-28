const express = require("express");
const router = express.Router();
const { isLoggedin } = require("../middleware");
const ctgCtr = require('../controllers/categories');
const multer = require("multer");
const {storage} = require('../cloudinary');
const upload = multer({ storage });

// Categories Routes

router.get("/", isLoggedin,  ctgCtr.Ctg);

router.route("/new")
    .get(isLoggedin, ctgCtr.newFormCtg)
    .post(isLoggedin, upload.array('Image'), ctgCtr.createNewCtg);

router.route('/edit/:id/')
    .get(isLoggedin, ctgCtr.editFormCtg)
    .put(isLoggedin, upload.array('Image'), ctgCtr.updateCtg)
    .delete(isLoggedin, ctgCtr.deleteCtg);

module.exports = router;