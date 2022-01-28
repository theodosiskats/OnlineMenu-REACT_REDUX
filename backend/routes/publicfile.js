const PublicFileMd = require('../models/publicfile');
const express = require("express");
const router = express.Router();
const { isLoggedin, isAdmin } = require("../middleware");
const multer = require("multer");
const {PDFstorage} = require('../cloudinary');
const upload = multer({ storage : PDFstorage });

//TODO - Add multiple files announcements

// Routes Δημοσιευμένων Αρχείων

router.get("/", isLoggedin, isAdmin, async(req,res)=>{
    res.render("dashboard/publicfile");
});

router.post("/", isLoggedin, isAdmin, upload.array('myFile'), async(req,res)=>{
    //Delete previous files
    const publicfiledb = await PublicFileMd.find({});
    for (doc of publicfiledb) {
        await PublicFileMd.findByIdAndDelete(doc._id);
    }
    //Create and Upload new files
    const publicfile = new PublicFileMd(req.body.publicfile);
    publicfile.myFile = req.files.map(f => ({ url: f.path, filename: f.filename }));
    console.log(publicfile);
    await publicfile.save();
    req.flash('success', 'Το pdf προστέθηκε επιτυχώς!');
    res.redirect('/publicfile');
});

router.delete("/", isLoggedin, isAdmin, async(req,res) =>{
    //Delete previous files
    const publicfiledb = await PublicFileMd.find({});
    for (doc of publicfiledb) {
        await PublicFileMd.findByIdAndDelete(doc._id);
    }
    req.flash('error', 'Το δημοσιευμένο pdf διαγράφθηκε επιτυχώς!');
    res.redirect('/dash/publicfile');
});

module.exports = router;