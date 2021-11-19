var express = require('express');

var ProductController = require('../controllers/product');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var mad_upload = multipart({uploadDir: './uploads/products'});

api.post('/createProduct', md_auth.ensureAuth, ProductController.createProduct);
api.get('/getProducts/:page?', md_auth.ensureAuth, ProductController.getAllProducts);
api.get('/getProduct/:productId/:categorie', md_auth.ensureAuth, ProductController.getProductByIdAndCategorie);
api.post('/upload-image-prod/:id', [md_auth.ensureAuth, mad_upload], ProductController.uploadImage);
api.get('/get-image-prod/:imageFile', ProductController.getImageFile);
api.get('/getTotalActiveProducts', md_auth.ensureAuth, ProductController.getTotalActiveProducts);
api.get('/getProductsIndex/:page?', ProductController.getProductsIndex);
api.get('/getProductsCarrousel/:page?', ProductController.getProductsIndex);
api.get('/getSearchCategory/:categorie?/:page?', ProductController.getSearchCategory);
api.get('/getProductById/:productId?', md_auth.ensureAuth, ProductController.getProductById);


module.exports = api;