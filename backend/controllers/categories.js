const { cloudinary } = require('../cloudinary')
const ProductMd = require('../models/product')
const CategoryMd = require('../models/category')
const SubcategoryMd = require('../models/subcategory')

// Categories Controllers

module.exports.Ctg = async (req, res, next) => {
  const categories = await CategoryMd.find({})
  res.json(categories)
}

module.exports.createNewCtg = async (req, res) => {
  //   CategoryMd.create(req.body, (error, data) => {
  //     if (error) {
  //         return next(error)
  //     } else {
  //         console.log(data)
  //         res.json(data)
  //         console.log('New Category', req.body)
  //     }
  // })

  const { name, description } = req.body

  if (!name || !description) {
    res.status(400)
    throw new Error('Please add a name and description')
  }

  const category = await CategoryMd.create({
    name,
    description,
  })

  res.status(201).json(category)

  //   const category = new CategoryMd(req.body)
  //   console.log(req.body)
  //   // category.Image = req.files.map((f) => ({ url: f.path, filename: f.filename }))
  //   await category.save()
  //   res.status(201).json(category);
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
