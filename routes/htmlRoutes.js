var db = require("../models");

module.exports = function (app) {

  // loads the first page to sign in with a button that on click leads to sign-up if not already 
  app.get("/", function (req, res) {
    res.render("signin", ({ layout: "initial.handlebars" }) );
  });

  //on click leads to signup page which renders profile  
  app.get("/signup", function(req, res) {
    res.render("signup", ({ layout: "initial.handlebars" }) );
  });

  app.get("/trivia", function(req, res) {
    res.render("initial-quiz", ({ layout: "initial.handlebars" }) );
  })

  app.get("/about", function(req, res) {
    res.render("aboutapp")
  });

  app.get("/my-profile/:name", function(req, res) {
    db.Tech.findOne({
      where: {
        name: req.params.name//take username from login info and match from tech db to get profile of logged in user  
      }
    })
    res.render("profile-page")
  });


  app.get("/all-results", function(req, res) {
    db.Tech.findAll({}).then(function(results) {
      res.render("results-page", {data: results});
    });
  });

  app.get("/result/profile/:id", function(req, res) {
    db.Tech.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function(result) {
      res.render("results-profile", {data: result})
    });
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
