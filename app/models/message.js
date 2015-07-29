var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  name: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.export = mongoose.model('message', messageSchema);
