var fs = require('fs');
var https = require('https');

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var passport = require('passport');
var passportLocal = require('passport-local');
var passportHttp = require('passport-http');
var passportFacebook = require('passport-facebook');

var app = express();

var server = https.createServer({
  cert: fs.readFileSync(__dirname + '/my.crt'),
  key: fs.readFileSync(__dirname + '/my.key')
}, app);

var fb = {
  id: fs.readFileSync(__dirname + '/fb.id', 'utf8'),
  secret: fs.readFileSync(__dirname + '/fb.secret', 'utf8')
};

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(expressSession({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy(verifyCredentials));

passport.use(new passportHttp.BasicStrategy(verifyCredentials));

passport.use(new passportFacebook.Strategy({
    clientID: fb.id,
    clientSecret: fb.secret,
    callbackURL: "http://www.matthewmartelle.com/MEANstack/personalSoundboard/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) {
        return done(err);
      }
      done(null, user);
    });
  }


));



function verifyCredentials(username, password, done) {
  //pretend this is using a real database
  //checkout express crypto
  if (username === password) {
    done(null, {
      id: username,
      name: username
    });
  } else {
    done(null, null);
  }
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // query database or cache here
  done(null, {
    id: id,
    name: id
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send(403);
  }
}

app.get('/', function(req, res) {
  res.render('index', {
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

app.use('/api', passport.authenticate('basic', {
  session: false
}));

app.get('/api/data', ensureAuthenticated, function(req, res) {
  res.json([{
    value: 'foo'
  }, {
    value: 'bar'
  }, {
    value: 'baz'
  }]);
});

var port = process.env.PORT || 1337;

server.listen(port, function() {
  console.log('http://127.0.0.1:' + port + '/');
});
