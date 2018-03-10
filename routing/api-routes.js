// *********************************************************************************
// api-routes.js
// Set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
let db = require("../models");

// TESTING
console.log("db",db);

// Routes
module.exports = function(app) {

    // GET route for getting all of the cards
    // View http://localhost:8080/api/all
    app.get("/api/all", function(req, res) {
        // use sequlize findAll to retrieve from db and pass to frontend
        // findAll returns all entries for the cards table when used with no options
        db.card.findAll({}).then(function(dbastronomy) {
            res.json(dbastronomy);
        });
    });

    // PUT route for getting all of the cards via accessing the req.body 
// View http://localhost:8080/api/description
    app.put("/api/description", function(req, res) {
        // An object is sent with a userDesc and id

        //console.dir(req.body);

        //db.cards.update(
            //req.body,
            //{
            //where: {
                //id: req.body.id
            //}
            //}).then(function(dbcards) {
                //res.json(dbcards);
            //})
            //.catch(function(err) {
                // "catch" an error to prevent it from being "thrown", 
                // which could crash our node app
                //res.json(err);
            //}); 

            // Send back Test message
           res.send("test");
            //res.json("test");

    });
// Make an AJAX put request to test the PUT route.



// an object is returned from the server and console.logged

    // PUT route that accesses the req.body
    
    
    // and updates the userDesc field in the db where the id matches.
    // has no dependencies
    //


            
            


    }; 





// new entry is returned to the front-end

/* MORE HERE */


