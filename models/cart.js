var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = Schema({
    idcart: String,
    usuarioid: String,
    motherboardid: String,
    processorid: String,
    graphiccard: String,
    ramid: [String],
    storageid: [String],
});

module.exports = mongoose.model("Cart", CartSchema);