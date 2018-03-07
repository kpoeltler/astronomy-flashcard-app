let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let Sequelize = require('sequelize');


let app = express();

let PORT = process.env.PORT || 8080;

let db = require("./models"); // Requiring our models for syncing

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static('./public/css')); 
app.use(express.static('./public/images')); 
app.use(express.static('./public/js'));

require('./routing/api-routes.js')(app);
require('./routing/html-houtes.js')(app);



// For DB
//db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
//});
