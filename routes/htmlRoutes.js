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

  //renders the trivia page
  app.get("/trivia", function (req, res) {
    res.render("initial-quiz", ({ layout: "initial.handlebars" }));
  })

  //renders the about page
  app.get("/about", function (req, res) {
    res.render("aboutapp", ({ layout: 'initial.handlebars' }));
  });

  //renders the profile setup
  app.get("/profile-setup", function (req, res) {
    // app.get("/api/userprofile", function(req, res) {
    // db.Tech.findOne({
    //   where: {
    //     userid: req.session.passport.user,
    //   }
    // }).then(function(profile) {
    //if ()
    // res.render('profile-page', {data: profile})
    // })
    // })
    res.render('profile-setup', { layout: 'survey.handlebars' });
  });

  //renders my-profile page with the data of user logged in 
  app.get("/profile", function (req, res) {
    console.log("\nreq.session.passport.user (id)" + req.session.passport.user + "\n");
    var userId = req.session.passport.user;
    db.user.findOne({
      where: {
        id: userId
      }
    }).then(function (result) {
      console.log("\ntrivia taken value : " + result.dataValues.trivia_taken + "\n");
      if (result.dataValues.trivia_taken === false) {
        res.redirect("/trivia");
      } else if (result.dataValues.trivia_taken === true) {
        res.redirect("/profile-setup")
      }
    })
  });

  //renders all results without filters
  //gotta do a minus or except query
  app.get("/matches", function (req, res) {
    db.Tech.findAll({}).then(function (results) {
      res.render("results-page", { data: results });
    });
  });

  //renders individual results 
  app.get("/result/profile/:id", function (req, res) {
    db.Tech.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (result) {
      console.log(result)
      res.render('results-profile', { data: result })
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
