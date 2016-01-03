var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new mongoose.Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true,
    unique: true
  },
  sounds: [{
    type: Schema.Types.ObjectId,
    ref: 'Sound'
  }]
});

var User = mongoose.model("Board", BoardSchema);
