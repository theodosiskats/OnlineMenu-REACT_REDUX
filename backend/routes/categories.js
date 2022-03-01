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
  .route('/edit/:id/')
  .get(controller.editFormCtg)
  .put(upload.array('image'), controller.updateCtg)
  .delete(controller.deleteCtg)

module.exports = router
