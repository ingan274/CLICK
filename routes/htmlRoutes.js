var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {

  // loads the first page to sign in with a button that on click leads to sign-up if not already 
  app.get("/", function (req, res) {
    res.render("signin", ({ layout: "initial.handlebars" }));
  });

  //on click leads to signup page which renders profile  
  app.get("/signup", function (req, res) {
    res.render("signup", ({ layout: "initial.handlebars" }));
  });

  //on click leads to select interest
  app.get("/interest", function (req, res) {
    res.render("category", ({ layout: "initial.handlebars" }));
  });

  //renders the trivia page
  app.get("/trivia", function (req, res) {
    res.render("initial-quiz", ({ layout: "initial.handlebars" }));
  })

  //renders the about page
  app.get("/about", function (req, res) {
    res.render("aboutapp", ({ layout: 'initial.handlebars' }));
  });

  //renders the about page with full navigation
  app.get("/aboutus", function (req, res) {
    res.render("aboutapp");
  });

  //renders the profile setup
  app.get("/profile-setup", function (req, res) {
    res.render('profile-setup', { layout: 'survey.handlebars' });
  });

  //renders the preference setup
  app.get("/preference-setup", function (req, res) {
    res.render('preference-setup', { layout: 'survey.handlebars' });
  });

  //renders the Image and setup messages (NOT FUNCTIONING)
  app.get("/my-messages", function (req, res) {
    res.render('messages');
  });

  //renders my-profile page with the data of user logged in 
  app.get("/my-profile", function (req, res) {
    console.log("\nreq.session.passport.user (id)" + req.session.passport.user + "\n");
    var userId = req.session.passport.user;
    db.user.findOne({
      where: {
        id: userId
      }
    }).then(function (result) {
      console.log("\ntrivia taken value : " + result.dataValues.trivia_taken + "\n");
      if (!result.dataValues.trivia_taken) {
        res.redirect("/trivia");
      } else if (result.dataValues.trivia_taken) {
        db.Tech.findOne({
          where: {
            userid: req.session.passport.user,
          }
        }).then(function (profile) {
          // console.log(profile)
          res.render('profile-page', profile)
        }).catch(function(err) {
          console.log(err)
          res.sendStatus(500)
        })
      }
    })
  });

  app.get("/my-profile/edit", function (req, res) {
    db.Tech.findOne({
      where: {
        userid: req.session.passport.user,
      }
    }).then(function (profile) {
      // console.log(profile)
      res.render('profile-edit', profile)
    })
  });

  //renders all results without filters
  //gotta do a minus or except query
  app.get("/matches", function (req, res) {

    var ageMin = parseInt(req.query.minA);
    var ageMax = parseInt(req.query.maxA);
    var heightMinFt = parseInt(req.query.minH);
    var heightMaxFt = parseInt(req.query.maxH);
    var heightMinInch = parseInt(req.query.minHI);
    var heightMaxInch = parseInt(req.query.maxHI);

    var search = {
      where: {
        userid: {
          [Op.ne]: req.session.passport.user
        }
      }
    }
    if (req.query.gender) {
      search.where.gender = req.query.gender
    }

    if (req.query.drinks) {
      search.where.drinks = req.query.drinks
    }

    if (req.query.location) {
      search.where.state = req.query.location
    }

    if (ageMin && !ageMax) {
      search.where.age = { [Op.gte]: ageMin}
    }

    if (!ageMin && ageMax) {
      search.where.age = { [Op.lte]: ageMax}
    }

    if (ageMin && ageMax) {
      search.where.age = { [Op.between]: [ageMin, ageMax]}
    }

    if (heightMinFt && !heightMaxFt) {
      search.where.heightfeet = { [Op.gte]: heightMinFt}
    }

    if (!heightMinFt && heightMaxFt) {
      search.where.heightfeet = { [Op.lte]: heightMaxFt}
    }

    if (heightMinFt && heightMaxFt) {
      search.where.heightfeet = { [Op.between]: [heightMinFt, heightMaxFt]}
    }


    if (heightMinInch && !heightMaxInch) {
      search.where.heightinches = { [Op.gte]: heightMinInch}
    }

    if (!heightMinInch && heightMaxInch) {
      search.where.heightinches = { [Op.lte]: heightMaxInch}
    }

    if (heightMinInch && heightMaxInch) {
      search.where.heightinches = { [Op.between]: [heightMinInch, heightMaxInch]}
    }

    db.Tech.findAll(
      search
    ).then(function (results) {
      res.render("results-page", { results: results });
    })
  });

  //get routes to filter with preferences and renders to results page 
  app.get("/matchesmore", function (req, res) {



    db.Tech.findAll({
      where: {

      
        heightfeet: {
          [Op.between]: [heightMinFt, heightMaxFt],
        },
        heightinches: {
          [Op.between]: [heightMinInch, heightMaxInch],
        },

      }
    }).then(function (result) {
      // console.log(result);
      // res.json(result)
      res.render("results-page", { results: result })
    }).catch(function (err) {
      console.log(err)
      res.sendStatus(505)
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
      res.render('result-profile', result)
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
