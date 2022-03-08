const express = require('express')
const passport = require('passport')
const router = express.Router()
const AdminMd = require('../models/admin')

router.post('/register', async (req, res, next) => {
  try {
    const { username, password, name, role } = req.body
    const admin = new AdminMd({ username, name, role })
    const registeredAdmin = await AdminMd.register(admin, password)
    console.log(registeredAdmin)
    req.flash('success', 'Δημιουργία νέου χρήστη επιτυχής!')
    res.redirect('dash/accounts')
  } catch (e) {}
})

router.post(
  '/userlogin',
  passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/userlogin',
  }),
  (req, res) => {}
)

router.get('/logout', (req, res) => {
  req.logout()
})

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params
  await AdminMd.findByIdAndDelete(id)
})

module.exports = router
