const express = require('express')
const router = express.Router()
const CategoryMd = require('../models/category')
const SubCategoryMd = require('../models/subcategory')
const ProductMd = require('../models/product')
const AnnouncementsMd = require('../models/announcements')
const PublicFileMd = require('../models/publicfile')

router.get('/categories', async (req, res) => {
  const categories = await CategoryMd.find({})
  const publicfiledb = await PublicFileMd.find({})
  const announcements = await AnnouncementsMd.find({})
  res.json(categories, publicfiledb, announcements)
})

router.get('/subcategories/:category', async (req, res) => {
  const category = req.params.category
  const subcategories = await SubCategoryMd.find({ category: category })
  res.json(subcategories)
})

router.get('/subcategories/', async (req, res) => {
  const subcategories = await SubCategoryMd.find({})
  res.json(subcategories)
})

router.get('/products/:category', async (req, res) => {
  const category = req.params.category
  const subcategories = await ProductMd.find({ category: category })
  res.json(subcategories)
})

module.exports = router