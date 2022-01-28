const express = require('express')
const router = express.Router();
const CategoryMd = require("../models/category")
const SubCategoryMd = require("../models/subcategory")
const ProductMd = require("../models/product")
const AnnouncementsMd = require("../models/announcements")
const PublicFileMd = require("../models/publicfile")

router.get("/categories", async (req, res) => {
  const categories = await CategoryMd.find({})
  const publicfiledb = await PublicFileMd.find({})
  const announcements = await AnnouncementsMd.find({})
  res.json(categories, publicfiledb, announcements)
})

router.get("/show/:category", async (req, res) => {
    let products = []
    const category = req.params.category
    const subcategories = await SubCategoryMd.find({ category: category })
    const productsBulk = await ProductMd.find({}).collation({ locale: "el" }).sort("name")
    productsBulk.forEach((product) => {
      subcategories.forEach((subcategory) => {
        if (subcategory.name === product.subcategory) {
          products.push(product)
        }
      })
    })
    res.json({ subcategories, products })
  }
)

module.exports = router;