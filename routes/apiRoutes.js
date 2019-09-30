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
      drinks: req.body.drinks,
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
      imageurl: req.body.imageurl,

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
          $gte: req.body.minA,
          $lte: req.body.maxA
        },
        heightfeet: {
          $gte: req.body.minH,
          $lte: req.body.maxH
        },
        heightinches: {
          $gte: req.body.minHI,
          $lte: req.body.maxHI,
        },
        drinks: req.body.drinks
      }
    }).then(function (result) {
      // res.json(result)
      res.render("results-page", {data: result})
    });
  });

  



  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
