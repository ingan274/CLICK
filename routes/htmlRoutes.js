var db = require("../models");

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('aboutapp', { layout: 'main.handlebars' });
  });


  // // Load index page
  // app.get("/", function(req, res) {
  //   db.Tech.findAll({}).then(function(dbExamples) {
  //     res.render("initial-quiz", {layout: 'inital.handlebars'},{
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
