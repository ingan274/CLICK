var db = require("../models");

module.exports = function (app) {
  // Get all from tech table
  app.get("/api/matches", function (req, res) {
    db.Tech.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/userprofile", function (req, res) {
    db.Tech.create({

      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      gender: req.body.gender,
      heightfeet: req.body.heightfeet,
      heightinches: req.body.heightinches,
      alcohol: req.body.alcohol,
      city: req.body.city,
      state: req.body.state,
      zodiac: req.body.zodiac,
      ethnicity: req.body.ethnicity,
      job: req.body.job,
      company: req.body.company,
      interest1: req.body.interest1,
      interest2: req.body.interest2,
      interest3: req.body.interest3,
      interest4: req.body.interest4,
      interest5: req.body.interest5,
      description: req.body.description,

    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  //get routes to filter with preferences and renders to results page 
  app.get("api/matches/preferred", function (req, res) {
    db.Tech.findAll({
      where: {
        gender: req.body.gender,
        age: {
          $gte: req.body.min,
          $lte: req.body.max,
        },
        heightfeet: {
          $gte: req.body.min
        },
        heightinches: {
          $gte: req.body.min
        },
        alcohol: req.body.alcohol,
      }
    }).then(function (result) {
      // res.json(result)
      res.render("results-page", {data: result})
    });
  });

  //updates the user table for trivia taken to true 
  app.put("/api/trivia-taken", function(req, res) {
    db.user.update({
      trivia_taken: true
    }, {
      where: {
        id: req.session.passport.user
      }
    }).then(function(update) {
      res.json(update)
    }).catch(function(err) {
      console.log(err)
    });
  });


  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
