var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CabinetSchema = Schema({
    name: String,
    description: String,
    image: String,
    cost: String,
    size: [String],
    color: String,
    slots3_5: String,
    slots2_5: String,
    watts: String,
    active: Boolean
});

module.exports = mongoose.model("Cabinet", CabinetSchema);