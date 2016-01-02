var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new mongoose.Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  position: Number,
  sounds: [{
    type: Schema.Types.ObjectId,
    ref: 'Sound'
  }]
});

var User = mongoose.model("Board", BoardSchema);
