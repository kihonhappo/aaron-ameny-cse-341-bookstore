
const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const products = [];

router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCss: true,
        activeAddProduct: true
    });
});

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/'); 
});

exports.routes = router;
exports.products = products;