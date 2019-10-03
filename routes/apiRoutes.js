var db = require("../models");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
  // Get all from tech table except the user
  app.get("/api/matches", function (req, res) {
    db.Tech.findAll({
      where: {
        userid: {
          [Op.ne]: req.session.passport.user
        }
      }
    }).then(function (data) {

      res.json(data);
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
    })
  })

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

  // app.get("/api/authdata", function (req, res) {
  //   db.user.findAll({
  //     where: {
  //       id: req.session.passport.user
  //     }
  //   }).then(function (result) {
  //     res.json(result);
  //     console.log(req.session.passport)
  //     console.log(result[0].dataValues)
  //   });
  // });

};
