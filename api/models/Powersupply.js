var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PowersupplySchema = Schema({
    name: String,
    description: String,
    image: String,
    cost: String,
    certification: String,
    color: String,
    wattage: String,
    watts: String,
    active: Boolean
});

module.exports = mongoose.model("Powersupply", PowersupplySchema);