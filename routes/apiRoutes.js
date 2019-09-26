var db = require("../models");

module.exports = function(app) {
  // Get all from tech table
  app.get("/api/matches", function(req, res) {
    db.Tech.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/api/matches", function(req, res) {
    db.Tech.create(req.body).then(function(dbExample) {
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
