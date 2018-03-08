let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let sequelize = require('sequelize');


let app = express();

let PORT = process.env.PORT || 8080;

let db = require("./models"); // Requiring our models for syncing

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(express.static("public"));

require('./routing/api-routes.js')(app);
require('./routing/html-houtes.js')(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

