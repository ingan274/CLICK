var db = require("../models");

module.exports = function (app) {
  // Get all from tech table
  app.get("/api/matches", function (req, res) {
    db.Tech.findAll({
      where: {
        userid: { $not: req.session.passport.user }
      }
    }).then(function (data) {

      res.json(data);
      //all matches except the user 
    });
  });

  app.post("/api/userprofile", function (req, res) {
    db.Tech.create({
      userid: req.session.passport.user,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      gender: req.body.gender,
      heightfeet: req.body.heightfeet,
      heightinches: req.body.heightinches,
      drinks: req.body.alcohol,
      city: req.body.city,
      state: req.body.state,
      zodiac: req.body.zodiac,
      ethnicity: req.body.ethnicity,
      job: req.body.jobposition,
      company: req.body.company,
      interest1: req.body.interest1,
      interest2: req.body.interest2,
      interest3: req.body.interest3,
      interest4: req.body.interest4,
      interest5: req.body.interest5,
      description: req.body.description,
      imgurl: req.body.imgurl
    }).then(function (newuser) {
      console.log("posted New User");
      res.json(newuser);
    }).catch(function (err) {
      console.log(err)
      res.sendStatus(500);
    });
  });

  //get routes to filter with preferences and renders to results page 
  app.get("/api/matches/preferred", function (req, res) {
    db.Tech.findAll({
      where: [{
        gender: "male",
        age: 18


        //   $gte: req.body.minA,
        //   $lte: req.body.maxA
        // },
        // heightfeet: {
        //   $gte: req.body.minH,
        //   $lte: req.body.maxH
        // },
        // heightinches: {
        //   $gte: req.body.minHI,
        //   $lte: req.body.maxHI,
        // },
        // alcohol: req.body.alcohol,
      }]
    }).then(function (result) {
      res.json(result)
      // res.render("results-page", { data: result })
    });
  });

  //updates the user table for trivia taken to true 
  app.put("/api/matches", function (req, res) {
    db.Tech.update(
      res.body.data
      , {
        where: {
          userid: req.session.passport.user
        }
      }).then(function (update) {
        res.json(update)
      }).catch(function (err) {
        console.log(err)
      });
  });


  //updates the user info for profile to new values
  app.put("/api/profile/update", function (req, res) {
    // console.log('req',req.body)
    var updates = req.body
    db.Tech.update(
      updates
      , {
        where: {
          userid: req.session.passport.user
        }
      }).then(function (update) {
        console.log(update)
        res.json(update)
      }).catch(function (err) {
        console.log(err)
        res.sendStatus(505)
      });
  });


  //updates the user table for trivia taken to true 
  app.put("/api/trivia-taken", function (req, res) {
    db.user.update({
      trivia_taken: true
    }, {
      where: {
        id: req.session.passport.user
      }
    }).then(function (update) {
      res.json(update)
    }).catch(function (err) {
      console.log(err)
    });
  });

  app.get("/api/authdata", function (req, res) {
    db.user.findAll({
      where: {
        id: req.session.passport.user
      }
    }).then(function (result) {
      res.json(result);
      console.log(req.session.passport)
      console.log(result[0].dataValues)
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
