// api-routes.js - Set of routes for displaying and saving data to the db


let db = require("../models");


// Create a GET route '/api/all' #35
// Add a get route for the path '/api/all' return a sample JSON
// This is temporary until db is set up


module.exports = function(app) {

    // GET route for getting all of the cards
    app.get("/api/all", function(req, res) {

        res.json({
                copyright: "Xiaohan Wang",
                date: "2018-03-06",
                explanation: "Why would the sky glow like a giant repeating rainbow?  Airglow.  Now air glows all of the time, but it is usually hard to see. A disturbance however -- like an approaching storm -- may cause noticeable rippling in the Earth's atmosphere. These gravity waves are oscillations in air analogous to those created when a rock is thrown in calm water.  Red airglow likely originates from OH molecules about 87-kilometers high, excited by ultraviolet light from the Sun, while orange and green airglow is likely caused by sodium and oxygen atoms slightly higher up.  While driving near Keluke Lake in Qinghai Provence in China, the photographer originally noticed mainly the impressive central band of the Milky Way Galaxy.  Stopping to photograph it, surprisingly, the resulting sensitive camera image showed airglow bands to be quite prominent and span the entire sky. The featured image has been digitally enhanced to make the colors more vibrant.    Follow APOD on: Facebook,  Google Plus,  Instagram, or Twitter",
                hdurl: "https://apod.nasa.gov/apod/image/1803/AirglowRings_Wang_3887.jpg",
                media_type: "image",
                service_version: "v1",
                title: "Colorful Airglow Bands Surround Milky Way",
                url: "https://apod.nasa.gov/apod/image/1803/AirglowRings_Wang_1080.jpg",
                userDesc: ""
        });

    });



    // PUT route that accesses the req.body 
    // and updates the userDesc in the db where the id matches.
    // has no dependencies
    app.put("/api/description", function(req, res) {

            console.dir(req.body);
            
        db.Cards.update(
            req.body,
            {
            where: {
                id: req.body.id
            }
            }).then(function(dbCards) {
                res.json(dbCards);
            })
            .catch(function(err) {
                // "catch" an error to prevent it from being "thrown", 
                // which could crash our node app
                res.json(err);
            }); 

            // res.send("test");

    }); 





// new entry is returned to the front-end

/* MORE HERE */




};
