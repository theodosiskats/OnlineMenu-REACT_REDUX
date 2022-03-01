const express = require('express')
const router = express.Router()
const controller = require('../controllers/categories')
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage })

// Categories Routes

router
  .route('/')
  .get(controller.getCategories)
  .post(upload.array('image'), controller.createCategory)

router
  .route('/:id')
  .get(controller.getCategory)
  .put(upload.array('image'), controller.updateCategory)
  .delete(controller.deleteCategory)

module.exports = router
