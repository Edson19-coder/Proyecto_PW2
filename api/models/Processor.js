var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProcessorSchema = Schema({
    name: String,
    description: String,
    image: String,
    cost: String,
    role: Boolean,
    /* True: AMD, False: Intel */
    cores: String,
    speed: String,
    socket: String,
    chipset: [String],
    /* Compatible list */
    watts: String,
    active: Boolean
});

module.exports = mongoose.model("Processor", ProcessorSchema);