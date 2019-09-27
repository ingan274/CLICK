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
      
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      heightfeet: req.body.heightfeet,
      heightinches: req.body.heightinches,
      drinks: req.body.drinks,
      city: req.body.city,
      state: req.body.state

    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });


  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
