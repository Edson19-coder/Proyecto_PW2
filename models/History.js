var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorySchema = Schema({
    idhistory: String,
    usuarioid: String,
    motherboardid: String,
    processorid: String,
    graphiccard: String,
    ramid: [String],
    storageid: [String],
    date: String,
});

module.exports = mongoose.model("History", HistorySchema);