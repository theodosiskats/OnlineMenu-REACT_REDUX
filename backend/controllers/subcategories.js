const { cloudinary } = require("../cloudinary");
const ProductMd = require('../models/product');
const CategoryMd = require('../models/category');
const SubcategoryMd = require('../models/subcategory');
const delay = ms => new Promise(res => setTimeout(res, ms));

// subcategories Controllers

module.exports.subctg = async(req,res)=>{
    const subcategories = await SubcategoryMd.find({});
    res.render("dashboard/subctg", {subcategories});
}

module.exports.newFormsubctg = async(req,res)=>{
    const subcategories = await SubcategoryMd.find({});
    const categories = await CategoryMd.find({});
    res.render("dashboard/subctgnew", {categories, subcategories});
}

module.exports.createNewsubctg = async (req,res) => {
    const Subcategory = new SubcategoryMd(req.body.Subcategory);
    Subcategory.Image = req.files.map(f => ({ url: f.path, filename: f.filename }));
    console.log("New Subcategory: " + Subcategory);
    await Subcategory.save();
    req.flash('success', 'Η νέα υποκατηγορία προστέθηκε επιτυχώς!');
    res.redirect("/subcategories");
}

module.exports.editFormsubctg = async(req,res) => {
    const categories = await CategoryMd.find({});
    const subcategories = await SubcategoryMd.find({});
    const subcategory = await SubcategoryMd.findById(req.params.id);
    res.render('dashboard/subctgview', {categories, subcategory, subcategories});
}

module.exports.deletesubctg = async(req,res) =>{
    const {id} = req.params;
    await SubcategoryMd.findByIdAndDelete(id);
    req.flash('error', 'Η υποκατηγορία διαγράφθηκε επιτυχώς!');
    res.redirect("/subcategories");
}

module.exports.updatesubctg = async(req,res)=>{
    const {id} = req.params;
    let subcategory = await SubcategoryMd.findByIdAndUpdate(id,{...req.body.subcategory});
    const img = req.files.map(f => ({ url: f.path, filename: f.filename }));
    subcategory.Image.push(...img);
    await subcategory.save();

    //Update products
    const products = await ProductMd.find({});
    for(let product of products){
        if(product.subcategory === subcategory.name){
            product.subcategory = req.body.subcategory.name;
            await product.save().then(() => {
                console.log("Product updated: " + product.name);
            });
        }
    }

    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await subcategory.updateOne({ $pull: { Image: { filename: { $in: req.body.deleteImages } } } })
    }

    const categories = await CategoryMd.find({});
    const subcategories = await SubcategoryMd.find({});
    subcategory = await SubcategoryMd.findById(id);
    req.flash('success', 'Η υποκατηγορία ενημερώθηκε επιτυχώς!');
    res.render('dashboard/subctgview', {categories, subcategories, subcategory});
}