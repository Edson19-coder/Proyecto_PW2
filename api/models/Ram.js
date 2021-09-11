var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RamSchema = Schema({
    name: String,
    description: String,
    image: String,
    cost: String,
    type: String,
    /* DDR4 */
    size: String,
    watts: String,
    active: Boolean
});

module.exports = mongoose.model("Ram", RamSchema);