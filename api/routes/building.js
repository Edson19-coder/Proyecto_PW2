var express = require('express');

var BuildingController = require('../controllers/building');

var api = express.Router();

var md_auth = require('../middlewares/authenticated');

api.get('/getType-building', md_auth.ensureAuth, BuildingController.getType);
api.get('/getProcessor-building', md_auth.ensureAuth, BuildingController.getProcessor);
api.get('/getMotherboard-building', md_auth.ensureAuth, BuildingController.getMotherboard);
api.get('/getStorage-building', md_auth.ensureAuth, BuildingController.getStorage);
api.get('/getRam-building', md_auth.ensureAuth, BuildingController.getRam);
api.get('/getCabinet-building', md_auth.ensureAuth, BuildingController.getCabinet);
api.get('/getPowerSupply-building', md_auth.ensureAuth, BuildingController.getPowerSupply);
api.post('/saveBuilding', md_auth.ensureAuth, BuildingController.saveBuilding);

module.exports = api;