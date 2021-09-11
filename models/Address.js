var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = Schema({
    idaddress: String,
    default: Boolean,
    calle: String,
    numExt: String,
    colonia: String,
    codPostal: String,
});

module.exports = mongoose.model("Address", AddressSchema);