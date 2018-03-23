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

  // app.put("/api/description/:id", function(req, res) {
  //   db.Card.create({
  //     (req.body, {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(dbUpdateComment) {
  //       res.json(dbUpdateComment);
  //     })
      
  // });

  //I added these post routes to see if the user stuff word save to'
//to the database ============================
  app.post("/api/update", function(req, res) {
    db.Card.create({
      user_desc: req.body.user_desc,
    }
  )
      
  app.post("/api/user-edit", function(req, res) {
    db.Card.update({
      user_desc: req.body.user_desc,
    },{
    where: {
      user_desc: req.body.user_desc,
    }
  })
    
      
      









