const { cloudinary } = require('../cloudinary')
const asyncHandler = require('express-async-handler')
const ProductMd = require('../models/product')
const CategoryMd = require('../models/category')
const SubcategoryMd = require('../models/subcategory')

// @desc    Get all products
// @route   GET /api/products
// @access  Public
module.exports.getProducts = async (req, res) => {
  const products = await ProductMd.find({})
  res.status(200).json(products)
}

// @desc    Get specific product
// @route   GET /api/products/:id
// @access  Private
module.exports.getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  const product = await CategoryMd.findById(id)
  res.status(200).json(product)
})

// @desc    Get all products belonging to specific category
// @route   GET /api/products/:category
// @access  Public
module.exports.getProductsbyCategory = async (req, res) => {
  const category = req.params.category
  const products = await ProductMd.find({ category: category })
  res.status(200).json(products)
}

// @desc    Create new product
// @route   POST /api/products
// @access  Private
module.exports.createProduct = asyncHandler(async (req, res) => {
  const { category, subcategory, name } = req.body
  if (!category || !subcategory || !name) {
    res.status(400)
    throw new Error('Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία')
  }
  const product = new ProductMd(req.body)
  product.image = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  await product.save()
  console.log(product)
  res.status(201).json(product)
})

// @desc    Update product
// @route   POST /api/categories/:id
// @access  Private
module.exports.updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  const product = await ProductMd.findByIdAndUpdate(id, { ...req.body })
  const img = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  product.image.push(...img)
  await product.save()

  //Delete Selected Images
  if (req.body.deleteImage) {
    const filename = req.body.deleteImage
    await cloudinary.uploader.destroy(filename)
    console.log('req.body.deleteImage', req.body.deleteImage)
    await product.updateOne({ $pull: { image: { filename: { $in: req.body.deleteImage } } } })
  }
  res.status(204)
})

// @desc    Delete product
// @route   DELETE /api/categories
// @access  Private
module.exports.deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  const product = await CategoryMd.findByIdAndDelete(id)

  //Delete Selected Images
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename)
    }
    await product.updateOne({
      $pull: { Image: { filename: { $in: req.body.deleteImages } } },
    })
  }
  res.status(204)
})