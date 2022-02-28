const express = require('express')
const router = express.Router()
const products = require('../controllers/products')
const AdminMd = require('../models/admin')
const CommentMd = require('../models/comments')

const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage })

//Accounts - Users Register Routes

router.get('/accounts', async (req, res) => {
  const accounts = await AdminMd.find({})
})

router.get('/register', async (req, res) => {
  res.render('users/register')
})

// Routes Μηνύματα Διαχειριστή

router.post('/comments', async (req, res) => {
  const comment = new CommentMd(req.body.comment)
  console.log(comment)
  await comment.save()
})

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params
  await CommentMd.findByIdAndDelete(id)
})

module.exports = router
