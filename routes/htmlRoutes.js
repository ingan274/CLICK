var db = require("../models");

module.exports = function (app) {

  // load the initial quiz page
  // app.get("/", function (req, res) {
  //   res.render('initial-quiz', {layout: 'initial.handlebars'});
  // });

  // load the first page for signin
  app.get("/", function (req, res) {
    res.render("signin", ({ layout: 'initial.handlebars' }));
  });

  app.get("/signup", function (req, res) {
    res.render("signup", ({ layout: 'initial.handlebars' }));
  });



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
