const express = require('express');
const passport = require('passport')
const router = express.Router();

const AdminMd = require('../models/admin');
const delay = ms => new Promise(res => setTimeout(res, ms));



router.get('/register', (req,res) =>{
    res.render('users/register');
});

router.post('/register', async(req,res, next) =>{
    try{
        const {username,password,name, role} = req.body;
        const admin = new AdminMd({username, name , role});
        const registeredAdmin = await AdminMd.register(admin, password);
        console.log(registeredAdmin);
        req.flash('success', 'Δημιουργία νέου χρήστη επιτυχής!');
        res.redirect('dash/accounts');
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/dash/register');
    }
}); 

router.get('/userlogin', (req, res) => {
    res.render('./users/login');
});

router.post('/userlogin', passport.authenticate('local', {failureFlash: true, failureRedirect: '/userlogin'}), (req, res) => {
    req.flash('success', 'Σύνδεση Διαχειριστή Επιτυχής');
    res.redirect('/dash');
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "Αποσύνδεση διαχειριστή επιτυχής")
    res.redirect('/');
});

router.delete('/delete/:id', async(req,res) =>{
    const {id} = req.params;
    await AdminMd.findByIdAndDelete(id);
    req.flash('error', 'Ο χρήστης διαγράφθηκε επιτυχώς!');
    res.redirect('/dash/accounts');
});

module.exports = router;