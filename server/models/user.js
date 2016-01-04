var mongoose = require('mongoose');

var SoundSchema = new mongoose.Schema({
  position: Number,
  accent: String,
  speaktext: String,
  options: {
    pitch: Number,
    rate: Number,
    volume: Number
  }
});

var BoardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true,
    unique: true
  },
  sounds: [SoundSchema]
});

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  first_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  boards: [BoardSchema]
});

var User = mongoose.model("User", UserSchema);
