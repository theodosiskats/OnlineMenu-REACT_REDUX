const express = require('express')
const router = express.Router()
const multer = require('multer')
const controller = require('../controllers/products')
const ProductMd = require('../models/product')
const { storage } = require('../cloudinary')
const upload = multer({ storage })

// Routes Προϊόντων /////////////////////////////////////////////////////
router.get('/', async (req, res) => {
  const products = await ProductMd.find({ facility: 'Εστιατόριο' })
  res.render('dashboard/products', { products })
})

router.post('/', upload.array('Image'), controller.createNew)

router.route('/:id')
  .get(controller.showProduct)
  .put(upload.array('Image'), controller.updateProduct)
  .delete(controller.deleteProduct)

module.exports = router
