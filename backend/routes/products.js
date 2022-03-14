const express = require('express')
const router = express.Router()
const multer = require('multer')
const controller = require('../controllers/products')
const { storage } = require('../cloudinary')
const upload = multer({ storage })

// Routes Προϊόντων /////////////////////////////////////////////////////
router
  .route('/')
  .get(controller.getProducts)
  .post(upload.array('image'), controller.createProduct)

router.get('/:category', controller.getProductsbyCategory)

router.route('/:id')
  .get(controller.getProduct)
  .put(upload.array('image'), controller.updateProduct)
  .delete(controller.deleteProduct)

module.exports = router
