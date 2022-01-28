const { cloudinary } = require("../cloudinary");
const ProductMd = require('../models/product');
const CategoryMd = require('../models/category');
const SubcategoryMd = require('../models/subcategory');
const delay = ms => new Promise(res => setTimeout(res, ms));

// Categories Controllers

module.exports.Ctg = async(req,res)=>{
    const categories = await CategoryMd.find({});
    res.render("dashboard/categories", {categories});
}

module.exports.newFormCtg = async(req,res)=>{
    const categories = await CategoryMd.find({});
    res.render("dashboard/categoriesnew", {categories});
}

module.exports.createNewCtg = async (req,res) => {
    const category = new CategoryMd(req.body.Category);
    category.Image = req.files.map(f => ({ url: f.path, filename: f.filename }));
    console.log(category);
    await category.save();
    req.flash('success', 'Η νέα κατηγορία προστέθηκε επιτυχώς!');
    res.redirect("/categories");
}

module.exports.editFormCtg = async(req,res) => {
    const categories = await CategoryMd.find({});
    const category = await CategoryMd.findById(req.params.id);
    res.render('dashboard/categoriesview', { category, categories});
}

module.exports.deleteCtg = async(req,res) =>{
    const {id} = req.params;
    await CategoryMd.findByIdAndDelete(id);
    req.flash('error', 'Η κατηγορία διαγράφθηκε επιτυχώς!');
    res.redirect("/categories");
}

module.exports.updateCtg = async(req,res)=>{
    const {id} = req.params;
    let category = await CategoryMd.findByIdAndUpdate(id,{...req.body.category});
    const img = req.files.map(f => ({ url: f.path, filename: f.filename }));
    category.Image.push(...img);
    await category.save();

    //Update subcategories
    const subcategories = await SubcategoryMd.find({});
    for(let subcategory of subcategories){
        if(subcategory.category === category.name){
            subcategory.category = req.body.category.name;
            await subcategory.save().then(() => {
                console.log("Subcategory updated: " + subcategory.name);
            });
        }
    }

    //Update products
    const products = await ProductMd.find({});
    for(let product of products){
        if(product.category === category.name){
            product.category = req.body.category.name;
            await product.save().then(() => {
                console.log("Product updated: " + product.name);
            });
        }
    }

    //Delete Selected Images
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await category.updateOne({ $pull: { Image: { filename: { $in: req.body.deleteImages } } } })
    }

    category = await CategoryMd.findById(id);
    req.flash('success', 'Η κατηγορία ενημερώθηκε επιτυχώς!');
    res.render('dashboard/categoriesview', { category});
}