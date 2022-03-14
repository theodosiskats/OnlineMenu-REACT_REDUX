const express = require('express')
const router = express.Router()
const controller = require('../controllers/subcategories')
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage: storage })

// Subcategories Routes

router.route('/')
.get(controller.getSubcategories)
.post(upload.array('image'), controller.createSubcategory)

router.get('/:category', controller.getSubcategoriesbyCategory)

.route('/:id')
.get(controller.getSubcategory)
.put(upload.array('image'), controller.updateSubcategory)
.delete(controller.deleteSubcategory)

module.exports = router