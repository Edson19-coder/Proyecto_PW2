var express = require('express');

var AddressController = require('../controllers/address');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

api.post('/createAddress', md_auth.ensureAuth, AddressController.createAddress);
api.delete('/deleteAddress/:addressId', md_auth.ensureAuth, AddressController.deleteAddress);
api.put('/updateDefaultAddress/:addressId', md_auth.ensureAuth, AddressController.updateDefaul);
api.get('/addresses', md_auth.ensureAuth, AddressController.getAllAddressByUserId);

module.exports = api;