var db = require("../models");

module.exports = function (app) {

  // loads the first page to sign in with a button that on click leads to sign-up if not already 
  app.get("/", function (req, res) {
    res.render("signin", ({ layout: "initial.handlebars" }));
  });

  //on click leads to signup page which renders profile  
  app.get("/signup", function (req, res) {
    res.render("signup", ({ layout: "initial.handlebars" }));
  });

<<<<<<< HEAD
  app.get("/trivia", function (req, res) {
    res.render("initial-quiz", ({ layout: "initial.handlebars" }));
  })

  app.get("/about", function (req, res) {
    res.render("aboutapp", ({ layout: 'initial.handlebars' }));
  });

  app.get("/profile-setup", function (req, res) {
    res.render('profile-setup', { layout: 'survey.handlebars' });
  });

  app.get("/my-profile/:name", function (req, res) {
    db.Tech.findOne({
      where: {
        name: req.params.name//take username from login info and match from tech db to get profile of logged in user  
      }
    })
    res.render('profile-page')
  });

  // all results
  app.get("/all-matches", function (req, res) {
    db.Tech.findAll({}).then(function (results) {
      // console.log(results)
      res.render("results-page", { results: results });
    });
  });

  app.get("/result/profile/:id", function (req, res) {
=======
  //renders the trivia page
  app.get("/trivia", function(req, res) {
    res.render("initial-quiz", ({ layout: "initial.handlebars" }) );
  })

  //renders the about page
  app.get("/about", function(req, res) {
    res.render("aboutapp", ({layout: 'initial.handlebars'}) );
  });

  //renders the profile setup
  app.get("/profile-setup", function(req, res) {
    res.render('profile-setup', {layout: 'survey.handlebars'});
  });

  //renders my-profile page with the data of user logged in 
  app.get("/my-profile/", function(req, res) {
    // db.Tech.findOne({
    //   where: {
    //     name: req.params.name //take username from login info and match from tech db to get profile of logged in user  
    //   }
    // })
    res.render('profile-page', {layout: 'main.handlebars'})
  });

  //renders all results without filters
  //gotta do a minus or except query
  app.get("/matches", function(req, res) {
    db.Tech.findAll({}).then(function(results) {
      res.render("results-page", {data: results});
    });
  });

  //renders individual results 
  app.get("/result/profile/:id", function(req, res) {
>>>>>>> 58b45cc227f1db03153d2b83ea078061a387e7fe
    db.Tech.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (result) {
      console.log(result)
      res.render('results-profile', {data: result})
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
