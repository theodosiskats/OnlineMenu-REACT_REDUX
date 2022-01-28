const express = require("express");
const router = express.Router();
const { isLoggedin } = require("../middleware");
const multer = require("multer");
const products = require('../controllers/products');

const {storage} = require('../cloudinary');
const upload = multer({ storage });

// Routes Προϊόντων /////////////////////////////////////////////////////
router.get("/", isLoggedin, async(req,res)=>{
    const products = await ProductMd.find({facility: "Εστιατόριο"});
    res.render("dashboard/products", {products});
});

router.post('/', isLoggedin, upload.array('Image'), products.createNew);

router.get("/new", isLoggedin, products.newForm);

router.route('/:id')
    .get(isLoggedin, products.showProduct)
    .put(isLoggedin, upload.array('Image'), products.updateProduct)
    .delete(isLoggedin, products.deleteProduct);

module.exports = router;