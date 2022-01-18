const Product = require('../model/product')

exports.getAddproduct = (req, res)=>{
    res.render('form', {title : 'Add Product Form'});
}

exports.postAddProduct = (req, res)=>{
    const product = new Product(req.body.title)
    // res.send(req.url + 'Check')
    product.save()
    res.send('Saved')
}

exports.fetchAll = (req, res)=>{
    const products = Product.fetchAll();
    res.render('products', {products})
}
