const PublicFileMd = require('../models/publicfile');
const express = require("express");
const router = express.Router();
const multer = require("multer");
const {PDFstorage} = require('../cloudinary');
const upload = multer({ storage : PDFstorage });

router.post("/", upload.array('myFile'), async(req,res)=>{
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
});

router.delete("/", async(req,res) =>{
    //Delete previous files
    const publicfiledb = await PublicFileMd.find({});
    for (doc of publicfiledb) {
        await PublicFileMd.findByIdAndDelete(doc._id);
    }
});

module.exports = router;