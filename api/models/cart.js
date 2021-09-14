var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = Schema({
    userId: {type: Schema.ObjectId, ref: 'User'},
    motherboardId: {type: Schema.ObjectId, ref: 'Product'},
    processorId: {type: Schema.ObjectId, ref: 'Product'},
    graphiccardId: {type: Schema.ObjectId, ref: 'Product'},
    ramId: [{type: Schema.ObjectId, ref: 'Product'}],
    storageId: [{type: Schema.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model("Cart", CartSchema);