var express = require('express');

var HistoyController = require('../controllers/history');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

api.post('/saveHistory', md_auth.ensureAuth, HistoyController.saveHistory);
api.get('/history', md_auth.ensureAuth, HistoyController.getHistory);


module.exports = api;