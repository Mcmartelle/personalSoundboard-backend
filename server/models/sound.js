var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SoundSchema = new mongoose.Schema({
  _board: {
    type: Schema.Types.ObjectId,
    ref: 'Board'
  },
  position: Number,
  accent: String,
  speaktext: String,
  options: {
    pitch: Number,
    rate: Number,
    volume: Number
  }
});

var Sound = mongoose.model("Sound", SoundSchema);
