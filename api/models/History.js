var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorySchema = Schema({
    userId: String,
    motherboardId: String,
    processorId: String,
    graphiccardId: String,
    ramId: [String],
    storageId: [String],
    date: String,
});

module.exports = mongoose.model("History", HistorySchema);