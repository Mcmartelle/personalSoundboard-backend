var mongoose = require('mongoose');
var Sound = mongoose.model('Sound');

module.exports = {

  readAll: function(req, res) {
    User.findOne({
      email: req.params.id
    }).populate('boards').exec(function(err, user) {
      if (err) {
        console.log("we got trouble");
        res.json(err);
      } else {
        console.log("Users.readAll");
        res.json(user);
      }
    });
  },

  readOne: function(req, res) {
    User.findOne({
      email: req.params.id
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
    console.log("User.removeAll");
    res.json({});
  },

  removeOne: function(req, res) {
    User.remove({
      email: req.params.id
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
