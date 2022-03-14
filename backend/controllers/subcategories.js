const { cloudinary } = require('../cloudinary')
const asyncHandler = require('express-async-handler')
const ProductMd = require('../models/product')
const CategoryMd = require('../models/category')
const SubcategoryMd = require('../models/subcategory')

// subcategories Controllers

// @desc    Get all categories
// @route   GET /api/subcategories
// @access  Public
module.exports.getSubcategories = async (req, res) => {
  const subcategories = await SubcategoryMd.find({})
  res.status(200).json(subcategories)
}

// @desc    Get specific category
// @route   GET /api/subcategories/:id
// @access  Private
module.exports.getSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  const subcategory = await SubcategoryMd.findById(id)
  res.status(200).json(subcategory)
})

// @desc    Get all products belonging to specific category
// @route   GET /api/subcategories/:category
// @access  Public
module.exports.getSubcategoriesbyCategory = async (req, res) => {
  const category = req.params.category
  const subcategories = await SubcategoryMd.find({ category: category })
  res.status(200).json(subcategories)
}

// @desc    Create new subcategory
// @route   POST /api/subcategories
// @access  Private
module.exports.createSubcategory = asyncHandler(async (req, res) => {
  const { category, name } = req.body
  if (!category || !name) {
    res.status(400)
    throw new Error('Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία')
  }
  const subcategory = new SubcategoryMd(req.body)
  subcategory.image = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  await subcategory.save()
  console.log(subcategory)
  res.status(201).json(subcategory)
})

// @desc    Update subcategory
// @route   POST /api/subcategories/:id
// @access  Private
module.exports.updateSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  const subcategory = await SubcategoryMd.findByIdAndUpdate(id, { ...req.body })
  const img = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  subcategory.image.push(...img)
  await subcategory.save()

  UpdateChildren(subcategory.name ,req.body.name)

  //Delete Selected Images
  if (req.body.deleteImage) {
    const filename = req.body.deleteImage
    await cloudinary.uploader.destroy(filename)
    await subcategory.updateOne({ $pull: { image: { filename: { $in: req.body.deleteImage } } } })
  }
  res.status(204)
})

// @desc    Delete category
// @route   DELETE /api/categories
// @access  Private
module.exports.deleteSubcategory = asyncHandler(async (req, res) => {
  const { id } = req.params
  const subcategory = await SubcategoryMd.findByIdAndDelete(id)

  //Delete Selected Images
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename)
    }
    await subcategory.updateOne({
      $pull: { Image: { filename: { $in: req.body.deleteImages } } },
    })
  }
  
  res.status(204)
})

const UpdateChildren = asyncHandler(async (subcategoryName, newSubcategoryName) => {
  //Find & Update products
  const products = await ProductMd.find({ category: subcategoryName })
  for (let product of products) {
    if (product.category === subcategoryName) {
      product.category = newSubcategoryName
      await product.save().then(() => {
        console.log('Product updated: ' + product.name)
      })
    }
  }
})
