// api-routes.js - 
// Set of routes for displaying and saving data to the db


let db = require("../models");

console.log("db",db);

module.exports = function(app) {

    // GET route for getting all of the cards as JSON
    app.get("/api/all", function(req, res) {
        //use sequlize findAll to retrieve from db and pass to frontend

  // GET route for getting all of the posts
  //app.get("/api/posts", function(req, res) {
    // Coming from astronomy db

        // findAll returns all entries for the cards table when used with no options
        db.card.findAll({}).then(function(dbastronomy) {
            // We have access to the todos as an argument inside of the callback function
            
            res.json(dbastronomy);
        });
    });




// Make an AJAX put request to test the PUT route.

// A PUT request is made with path '/api/description'
// an object is sent with a userDesc and id
// an object is returned from the server and console.logged

    // PUT route that accesses the req.body 
    // and updates the userDesc in the db where the id matches.
    // has no dependencies
    //app.put("/api/description", function(req, res) {

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

            // res.send("test");

    }; 





// new entry is returned to the front-end

/* MORE HERE */


