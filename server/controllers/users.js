var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = {

  readAll: function(req, res) {
    User.find({}, function(err, users) {
      if (err) {
        console.log("we got trouble");
        res.json(err);
      } else {
        console.log("Users.readAll");
        res.json(users);
      }
    });
  },

  readOne: function(req, res) {
    Person.findOne({
      name: req.params.name
    }, function(err, person) {
      if (err) {
        console.log("oh no.");
        res.json(err);
      } else {
        res.json(person);
      }
    });
  },

  create: function(req, res) {
    console.log("create...req.body:", req.body);

    var user = new User(req.body);
    user.save(function(err) {
      if (err) {
        console.log('whooops');
        res.json(err);
      } else {
        console.log("users.create")
        res.json({
          message: "user created"
        });
      }
    });

  },

  update: function(req, res) {
    console.log("User.update");
    res.json({});
  },

  updatePartial: function(req, res) {
    console.log("User.updatePartial");
    res.json({});
  },

  removeAll: function(req, res) {
    console.log("User.updatePartial");
    res.json({});
  },

  removeOne: function(req, res) {
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
