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
    User.findOne({
      email: req.params.id
    }, function(err, user) {
      if (err) {
        console.log("we got trouble");
        res.json(err);
      } else {
        console.log("Users.readOne");
        res.json(user);
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
        console.log("users.create");
        res.json({
          message: "user created"
        });
      }
    });

  },

  update: function(req, res) {
    console.log(req.body);
    User.findOne({
      email: req.params.id
    }, function(err, user) {
      if (err) {
        console.log('whooops');
        res.json(err);
      } else {
        // for (idx in req.body.boards) {
        //   user.boards.push(req.body.boards[idx]);
        // }
        user.boards = req.body.boards;
        console.log("users.update");
        user.save(function(err) {
          if (err) {
            console.log('whooops');
            res.json(err);
          } else {
            console.log('boards added');
          }
        });
      }
    });




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
