const express = require("express");
const router = express.Router();
const { isLoggedin, isAdmin} = require("../middleware");
const products = require('../controllers/products');
const AdminMd = require('../models/admin');
const CommentMd = require('../models/comments');

const multer = require("multer");
const {storage} = require('../cloudinary');
const upload = multer({ storage });

// add to all routes the isLoggedin middleware

// this need to be redone in order to count and view all categories not by facility specifically
router.get("/", isLoggedin, async(req,res)=>{
    const comments = await CommentMd.find({});
    const currentUser = req.user;
    res.render('dashboard/index', {currentUser, comments});
});

//Accounts - Users Register Routes

router.get("/accounts",  isLoggedin, isAdmin, async(req,res)=>{
    const accounts = await AdminMd.find({});
    res.render("dashboard/accounts", {accounts});
});

router.get("/register",  isLoggedin, isAdmin, async(req,res)=>{
    res.render("users/register");
});

// Routes Μηνύματα Διαχειριστή

router.post('/comments', async (req,res) => {
    const comment = new CommentMd(req.body.comment);
    console.log(comment);
    await comment.save();
    req.flash('success', 'Το μήνυμα προστέθηκε επιτυχώς!');
    res.redirect('/dash')
});

router.delete('/delete/:id', async(req,res) =>{
    const {id} = req.params;
    await CommentMd.findByIdAndDelete(id);
    req.flash('error', 'Το μήνυμα διαγράφθηκε επιτυχώς!');
    res.redirect('/dash');
});



// DataTables ///////////////////////////////////////////////////////////

router.get("/datatables", isLoggedin, isAdmin, async(req,res)=>{
    const products = await ProductMd.find({});
    res.render("dashboard/datatables", {products});
});

// Route Σχετικά με αυτή την εφαρμογή
router.get("/about", isLoggedin, (req,res)=>{
    res.render("dashboard/about")
});

module.exports = router;