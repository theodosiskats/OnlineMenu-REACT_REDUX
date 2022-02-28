const express = require('express')
const router = express.Router()
const controller = require('../controllers/subcategories')
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage: storage })

// Categories Routes

router.get('/', controller.getSubcategories)

router.get('/:category', controller.getSubcategoriesbyCategory)

router.route('/new')
  .get(controller.newFormsubctg)
  .post(upload.array('Image'), controller.createNewsubctg)

router.route('/edit/:id/')
  .get(controller.editFormsubctg)
  .put(upload.array('Image'), controller.updatesubctg)
  .delete(controller.deletesubctg)

module.exports = router
