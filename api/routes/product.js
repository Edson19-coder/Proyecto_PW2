var express = require('express');

var ProductController = require('../controllers/product');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

api.get('/getProducts/:page?', md_auth.ensureAuth, ProductController.getAllProducts);
api.get('/getProduct/:productId/:categorie', md_auth.ensureAuth, ProductController.getProductByIdAndCategorie);

module.exports = api;