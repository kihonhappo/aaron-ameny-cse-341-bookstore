const path = require('path');
const express = require('express');
const url = require('url');


const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
    /*console.log('shop.js', adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));*/

    let products = adminData.products;
    let queryObject = url.parse(req.url,true).query;
    //console.log(req.body.title);
    if(queryObject.action){
        if(queryObject.action == 'delete'){
            products = products.filter(x => x.title !== queryObject.book);
             
        }
    }
    
    
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCss: true,
        layout: false
    });
});

module.exports = router;