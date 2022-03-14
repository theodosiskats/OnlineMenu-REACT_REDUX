const { cloudinary } = require('../cloudinary')
const asyncHandler = require('express-async-handler')
const CategoryMd = require('../models/category')
const SubcategoryMd = require('../models/subcategory')
const ProductMd = require('../models/product')

// Categories Controllers

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
module.exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await CategoryMd.find({})
  res.status(200).json(categories)
})

// @desc    Get specific category
// @route   GET /api/categories/:id
// @access  Private
module.exports.getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  const category = await CategoryMd.findById(id)
  res.status(200).json(category)
})

// @desc    Create new category
// @route   POST /api/categories
// @access  Private
module.exports.createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body
  if (!name) {
    res.status(400)
    throw new Error('Παρακαλώ προσθέστε ένα όνομα κατηγορίας')
  }
  const category = new CategoryMd(req.body)
  category.image = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  await category.save()
  console.log('New category:', category)
  res.status(201).json(category)
})

// @desc    Update category
// @route   POST /api/categories/:id
// @access  Private
module.exports.updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  const category = await CategoryMd.findByIdAndUpdate(id, { ...req.body })
  const img = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  category.image.push(...img)
  await category.save()

  UpdateChildren(category.name ,req.body.name)

  //Delete Selected Images
  if (req.body.deleteImage) {
    const filename = req.body.deleteImage
    await cloudinary.uploader.destroy(filename)
    await category.updateOne({ $pull: { image: { filename: { $in: req.body.deleteImage } } } })
  }
  res.status(204)
})

// @desc    Delete category
// @route   DELETE /api/categories
// @access  Private
module.exports.deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  const category = await CategoryMd.findByIdAndDelete(id)

  //Delete Selected Images
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename)
    }
    await category.updateOne({
      $pull: { Image: { filename: { $in: req.body.deleteImages } } },
    })
  }

  res.status(204)
})

const UpdateChildren = asyncHandler(async (categoryName, newCategoryName) => {
  //Find & Update subcategories
  const subcategories = await SubcategoryMd.find({ category: categoryName })
  for (let subcategory of subcategories) {
    if (subcategory.category === categoryName) {
      subcategory.category = newCategoryName
      await subcategory.save().then(() => {
        console.log('Subcategory updated: ' + subcategory.name)
      })
    }
  }

  //Find & Update products
  const products = await ProductMd.find({ category: categoryName })
  for (let product of products) {
    if (product.category === categoryName) {
      product.category = newCategoryName
      await product.save().then(() => {
        console.log('Product updated: ' + product.name)
      })
    }
  }
})
