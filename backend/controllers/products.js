const ProductMd = require('../models/product');
const CategoryMd = require('../models/category');
const SubcategoryMd = require('../models/subcategory');
const { cloudinary } = require("../cloudinary");
const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports.getProducts = async (req, res) => {
    const products = await ProductMd.find({})
    res.status(200).json(products)
  }

  module.exports.getProductsbyCategory = async (req, res) => {
    const category = req.params.category
    const products = await ProductMd.find({ category: category })
    res.status(200).json(products)
  }


module.exports.newForm = async(req,res)=>{
    const categories = await CategoryMd.find({});
    const subcategories = await SubcategoryMd.find({});
    res.render("dashboard/productsnew", {categories, subcategories});
}

module.exports.createNew = async (req,res) => {
    const product = new ProductMd(req.body.product);
    product.Image = req.files.map(f => ({ url: f.path, filename: f.filename }));
    console.log(product);
    await product.save();
    req.flash('success', 'Το προϊόν προστέθηκε επιτυχώς!');
    res.redirect('products')
}

module.exports.updateProduct = async(req,res)=>{
    const {id} = req.params;
    console.log(req.body);
    let product = await ProductMd.findByIdAndUpdate(id,{...req.body.product});
    const img = req.files.map(f => ({ url: f.path, filename: f.filename }));
    product.Image.push(...img);
    await product.save();

    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await product.updateOne({ $pull: { Image: { filename: { $in: req.body.deleteImages } } } })
    }

    product = await ProductMd.findById(req.params.id);
    req.flash('success', 'Το προϊόν ενημερώθηκε επιτυχώς!');
    const categories = await CategoryMd.find({});
    const subcategories = await SubcategoryMd.find({});
    res.render('dashboard/productsview', {product, categories, subcategories});
}

module.exports.deleteProduct = async(req,res) =>{
    const {id} = req.params;
    await ProductMd.findByIdAndDelete(id);
    req.flash('error', 'Επιτυχής διαγραφή προϊόντος!');
    res.redirect("../products");
}

module.exports.showProduct = async(req,res) => {
    const categories = await CategoryMd.find({});
    const subcategories = await SubcategoryMd.find({});
    const product = await ProductMd.findById(req.params.id);
    res.render('dashboard/productsview', { product, categories, subcategories});
}
