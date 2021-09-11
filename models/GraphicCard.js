var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GraphicCardSchema = Schema({
    idgraphiccard: String,
    name: String,
    description: String,
    image: String,
    cost: String,
    vel: String,
    type: String,
    /* Gddr6 etc */
    size: String,
    watts: String,
    active: Boolean
});

module.exports = mongoose.model("GraphicCard", GraphicCard);