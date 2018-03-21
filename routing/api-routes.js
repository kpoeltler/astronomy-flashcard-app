let db = require("../models");

// Routes
module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    db.card.findAll({}).then(function(dbastronomy) {
      res.json(dbastronomy);
    });
  });

  // GET route for getting one specific card by its id - SELECT by id
  app.get("/api/card/:id", function(req, res) {
    db.card
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbOneCard) {
        res.json(dbOneCard);
      });
  });

  /**
   * GET route for getting cards of all subjects - SELECT subject, GROUP BY
   */
  app.get("/api/subjectsall", function(req, res) {
    db.card
      .findAll({
        group: [
          // will return `name`
          ["subject"],
          // will return `username` DESC
          ["subject", "DESC"]
        ]
      })
      .then(function(dbSubjects) {
        res.json(dbSubjects);
      });
  });

  // Gets a specific subject
  app.get("/api/subjects/:subject", function(req, res) {
    db.card
      .findAll({
        where: {
          subject: req.params.subject
        }
      })
      .then(function(dbCardSubject) {
        res.json(dbCardSubject);
      });
  });

  app.put("/api/description/:id", function(req, res) {
    db.card
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbUpdateComment) {
        res.json(dbUpdateComment);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  /**
   * POST route for saving a new card from API every 24 Hours - INSERT
   */
  app.post("/api/insert-card", function(req, res) {
    db.card
      .create(req.body)
      .then(function(dbAddCard) {
        res.json(dbAddCard);
      })
      .then(function(dbAddCard) {
        res.json(dbAddCard);
      });
  });
};
