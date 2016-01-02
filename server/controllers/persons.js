var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {

  readAll: function(req, res) {
    Person.find({}, function(err, persons) {
      if (err) {
        console.log("we got trouble");
        res.json(err);
      } else {
        console.log("in readAll method");
        res.json(persons);
      }
    });
  },

  create: function(req, res) {
    console.log("POST DATA:", req.params.name);
    //might want to validate here
    var person = new Person({
      name: req.params.name
    });
    person.save(function(err) {
      if (err) {
        console.log('whooops');
        res.json(err);
      } else {
        console.log("in create method")
        res.json({});
      }
    });
  },

  readOne: function(req, res) {
    Person.find({
      name: req.params.name
    }, function(err, person) {
      if (err) {
        console.log("oh no.");
        res.json(err);
      } else {
        console.log("Found data for: " + req.params.name)
        console.log(person);
        res.json(person);
      }
    });
  },

  destroy: function(req, res) {
    Person.remove({
      name: req.params.name
    }, function(err, person) {
      if (err) {
        console.log("Oh noooo!");
        res.json(err);
      } else {
        console.log("In the remove method");
        res.json({});
      }
    });
  }
}
