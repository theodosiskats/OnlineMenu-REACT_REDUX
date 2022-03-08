const express = require('express')
const router = express.Router()
const multer = require('multer')
const controller = require('../controllers/products')
const ProductMd = require('../models/product')
const { storage } = require('../cloudinary')
const upload = multer({ storage })

// Routes Προϊόντων /////////////////////////////////////////////////////
router
  .route('/')
  .get(controller.getProducts)

router.get('/:category', controller.getProductsbyCategory)

router.post('/', upload.array('Image'), controller.createNew)

router.route('/:id')
  .get(controller.showProduct)
  .put(upload.array('Image'), controller.updateProduct)
  .delete(controller.deleteProduct)

module.exports = router
