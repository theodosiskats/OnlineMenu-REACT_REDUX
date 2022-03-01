const { cloudinary } = require('../cloudinary')
const ProductMd = require('../models/product')
const CategoryMd = require('../models/category')
const SubcategoryMd = require('../models/subcategory')

// Categories Controllers

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
module.exports.getCategories = async (req, res, next) => {
  const categories = await CategoryMd.find({})
  res.status(200).json(categories)
}

// @desc    Create new category
// @route   POST /api/categories
// @access  Public
module.exports.createCategory = async (req, res) => {
  const { name, description } = req.body

  if (!name || !description) {
    res.status(400)
    throw new Error('Please add a name and description')
  }

  const category = new CategoryMd(req.body)
  category.image = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  await category.save()

  console.log('New category:', category)

  res.status(201).json(category)
}

module.exports.createNewCtg = async (req, res) => {
  const { name, description } = req.body

  if (!name || !description) {
    res.status(400)
    throw new Error('Please add a name and description')
  }

  const category = new CategoryMd(req.body)
  category.image = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  await category.save()

  console.log('New category:', category)

  res.status(201).json(category)
}

module.exports.editFormCtg = async (req, res) => {
  const categories = await CategoryMd.find({})
  const category = await CategoryMd.findById(req.params.id)
}

module.exports.deleteCtg = async (req, res) => {
  const { id } = req.params
  await CategoryMd.findByIdAndDelete(id)
}

module.exports.updateCtg = async (req, res) => {
  const { id } = req.params
  let category = await CategoryMd.findByIdAndUpdate(id, {
    ...req.body.category,
  })
  const img = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  category.Image.push(...img)
  await category.save()

  //Update subcategories
  const subcategories = await SubcategoryMd.find({})
  for (let subcategory of subcategories) {
    if (subcategory.category === category.name) {
      subcategory.category = req.body.category.name
      await subcategory.save().then(() => {
        console.log('Subcategory updated: ' + subcategory.name)
      })
    }
  }

  //Update products
  const products = await ProductMd.find({})
  for (let product of products) {
    if (product.category === category.name) {
      product.category = req.body.category.name
      await product.save().then(() => {
        console.log('Product updated: ' + product.name)
      })
    }
  }

  //Delete Selected Images
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename)
    }
    await category.updateOne({
      $pull: { Image: { filename: { $in: req.body.deleteImages } } },
    })
  }

  category = await CategoryMd.findById(id)
}
