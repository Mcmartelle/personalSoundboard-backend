var mongoose = require('mongoose');
var User = mongoose.model('User');
var Board = mongoose.model('Board');

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
        res.json(user.boards);
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
    User.findOne({
      email: req.params.id
    }, function(err, user) {

      var board = new Board(req.body);

      board._user = user._id;
      user.boards.push(board);

      board.save(function(err) {
        user.save(function(err) {
          if (err) {
            console.log('whooops');
            res.json(err);
          } else {
            console.log("boards.create")
            res.json({
              message: "board created"
            });
          }
        });
      });
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
