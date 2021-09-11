var express = require('express');

var UserController = require('../controllers/user');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

api.post('/user-register', UserController.createUser);
api.post('/user-login', UserController.loginUser);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.get('/user/:id', md_auth.ensureAuth, UserController.getUserById); //id bligatorio.
api.get('/users/:page?', md_auth.ensureAuth, UserController.getAllUer); //page no obligatorio (Se usa el ? cuando no es un dato obligatorio).

module.exports = api;