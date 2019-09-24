require("dotenv").config();
var express = require("express");

var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");


var db = require("./app/models");

var app = express();
var PORT = process.env.PORT || 3000;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(express.static("public"));

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// //Models
var models = require("./app/models");

// Routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);
require('./app/routes/authRoutes.js')(app, passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  console.log('Nice! Database looks fine')

}).catch(function (err) {

  console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});


module.exports = app;
