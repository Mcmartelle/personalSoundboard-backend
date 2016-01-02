var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
  boards: [{
    type: Schema.Types.ObjectId,
    ref: 'Board'
  }]
});

// UserSchema.path('email').required(true, 'User email cannot be blank');
// UserSchema.path('first_name').required(true, 'User name cannot be blank');
// UserSchema.path('password').required(true, 'User password cannot be blank');

var User = mongoose.model("User", UserSchema);
