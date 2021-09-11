var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StorageSchema = Schema({
    idgraphiccard: String,
    name: String,
    description: String,
    image: String,
    cost: String,
    type: String,
    /* DiscoDuro solido */
    typ2: String,
    /* m2 o sata */
    size: String,
    watts: String,
    active: Boolean
});

module.exports = mongoose.model("Storage", GraphicCard);