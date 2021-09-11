var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    iduser: String,
    role: Boolean,
    name: String,
    surname: String,
    email: String,
    password: String,
    image: String,
    active: Boolean
});

module.exports = mongoose.model("User", UserSchema);