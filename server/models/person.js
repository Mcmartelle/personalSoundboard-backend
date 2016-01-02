var mongoose = require('mongoose');

//define and register schema, create models
var PersonSchema = mongoose.Schema({
  name: String
});
var Person = mongoose.model("Person", PersonSchema);
