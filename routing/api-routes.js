// *********************************************************************************
// api-routes.js
// Set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
let db = require("../models");

// TESTING
// console.log("db",db);
// console.dir(req.body);

// Routes
module.exports = function(app) {

    // GET route for getting all of the cards - SELECT ALL
    // View http://localhost:8080/api/all
    app.get("/api/all", function(req, res) {
        // use sequelize findAll to retrieve from db and pass to front-end
        // findAll returns all entries for the cards table when used with no options
        db.card.findAll({}).then(function(dbastronomy) {
            res.json(dbastronomy);
        });
    });


    // GET route for getting one specific card by its id - SELECT by id
    app.get("/api/card/:id", function(req, res) {
        db.card.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbOneCard) {
            res.json(dbOneCard);
        });
    });


// We need to populate the column subject
    // Get route for getting cards of a specific subject - SELECT by subject
    app.get("/api/card/subject/:subject", function(req, res) {
        db.card.findAll({
            where: {
                subject: req.params.subject
            }
        })
        .then(function(dbCardSubject) {
            res.json(dbCardSubject);
        });
    });


    // PUT route for user comment input for a specific card via accessing the req.body - UPDATE a column
    app.put("/api/description/:id", function(req, res) {
        // An object is sent with a user_desc and id
        // I added id in query string also,
        // just in case we want extra validation
        // using & http://docs.sequelizejs.com/manual/tutorial/querying.html

        db.card.update(
        req.body,
            {
            where: {
                id: req.body.id
            }
            }).then(function(dbUpdateComment) {
                res.json(dbUpdateComment);
            })
            .catch(function(err) {
                // "catch" an error to prevent it from being "thrown", 
                // which could crash our node app
                res.json(err);
            }); 

            // TESTING Send back Test message
            // let cardID = req.params.id;
            // res.json(req.body);
            // res.send(cardID);
    });


    // POST route for saving a new card
    app.put("/api/insert-card", function(req, res) {
        db.card.create(req.body).then(function(dbAddCard) {
            res.json(dbAddCard);
        }).then(function(dbAddCard) {
            res.json(dbAddCard);
        });
    });



// DELETE route for deleting posts
// app.delete("/api/card/delete/:id", function(req, res) {
// db.card.destroy({
// where: {
// id: req.params.id
// }
// })
// .then(function(dbDeleteCard) {
// res.json(dbDeleteCard);
// });
// });

}; 

