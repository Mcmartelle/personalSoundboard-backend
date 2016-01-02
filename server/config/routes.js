// var personsController = require('../controllers/persons');
var usersController = require('../controllers/users');
var boardsController = require('../controllers/boards');
var soundsController = require('../controllers/sounds');

var bodyParser = require('body-parser');

module.exports = function(app) {
  //RESTful routes
  app.get('/', function(req, res) {
    res.render('index.html');
  });

  app.post('/register', usersController.create); //not restful.. this is to get around the authentification for '/api'

  app.get('/api/users/', usersController.readAll);
  app.get('/api/users/:id/', usersController.readOne);
  app.post('/api/users/', usersController.create);
  app.put('/api/users/:id/', usersController.update);
  app.patch('/api/users/:id/', usersController.updatePartial);
  app.delete('/api/users/', usersController.removeAll);
  app.delete('/api/users/:id/', usersController.removeOne);

  // app.get('/api/users/:id/boards/', boardsController.readAll);
  // app.get('/api/users/:id/boards/:bid/', boardsController.readOne);
  // app.post('/api/users/:id/boards/', boardsController.create);
  // app.put('/api/users/:id/boards/:bid/', boardsController.update);
  // app.patch('/api/users/:id/boards/:bid/', boardsController.updatePartial);
  // app.delete('/api/users/:id/boards/', boardsController.removeAll);
  // app.delete('/api/users/:id/boards/:bid/', boardsController.removeOne);

  // app.get('/api/users/:id/boards/:bid/sounds/', soundsController.readAll);
  // app.get('/api/users/:id/boards/:bid/sounds/:sid', soundsController.readOne);
  // app.post('/api/users/:id/boards/:bid/sounds/', soundsController.create);
  // app.put('/api/users/:id/boards/:bid/sounds/:sid', soundsController.update);
  // app.patch('/api/users/:id/boards/:bid/sounds/:sid', soundsController.updatePartial);
  // app.delete('/api/users/:id/boards/:bid/sounds/', soundsController.removeAll);
  // app.delete('/api/users/:id/boards/:bid/sounds/:sid', soundsController.removeOne);

}
