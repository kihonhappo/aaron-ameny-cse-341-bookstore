
const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const url = require('url');

let products = [];

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
    products.push({title: req.body.title, description: req.body.description, price: req.body.price, img: req.body.img});
    res.redirect('/'); 
});

router.get('/delete-product', (req, res, next) => {
    let queryObject = url.parse(req.url,true).query;
    //console.log(req.body.title);
   // if(queryObject.action){
        //if(queryObject.action == 'delete'){
            products = products.filter(x => x.title !== queryObject.book);
        //}
  //  }
    //products = products.filter(x => x.title != req.body.title);
    res.redirect('/'); 
});

exports.routes = router;
exports.products = products;