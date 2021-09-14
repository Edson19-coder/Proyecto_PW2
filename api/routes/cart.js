var express = require('express');

var CartController = require('../controllers/cart');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');


api.post('/saveBuilding', md_auth.ensureAuth, CartController.saveBuilding);
api.delete('/delteBuilding/:cartId', md_auth.ensureAuth, CartController.deleteBuilding);
api.get('/cart', md_auth.ensureAuth, CartController.getCart);

module.exports = api;