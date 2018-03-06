// Dependencies
// =============================================================
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let path = require("path");

// Sets up the Express App
// =============================================================

let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("app/public"));

// Routes WHY THIS METHOD
// =============================================================
// app.all('app/routing/api-routes.js', function (req, res, next) {
//   console.log('accessing api-routes')
//   next() // pass control to the next handler
// })
// app.all('app/routing/html-routes.js', function (req, res, next) {
//   console.log('accessing html-routes')
// next() // pass control to the next handler

require("./app/routing/api-routes.js")(app);

require("./app/routing/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//Parse data from JSON POST and insert into MYSQL

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// Configure MySQL connectionA
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'node',
	password: 'node',
	database: 'node_project'
  })

// Configure MySQL connectionB
db.Sequalize.sync().then (function() {
  app.listen (PORT, function () {
    console.log ("App listening on PORT " +PORT);
  });
});


//Establish MySQL connection
connection.connect(function(err) {
   if (err) 
      throw err
   else {
       console.log('Connected to MySQL');
       // Start the app when connection is ready
       app.listen(3000);
       console.log('Server listening on port 3000');
 }
});

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+ '/myfile.html'));
});

app.post('/', function(req, res) {

var jsondata = req.body;
var values = [];

for(var i=0; i< jsondata.length; i++)
  values.push([jsondata[i].name,jsondata[i].age]);

//Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
connection.query('INSERT INTO members (name, age) VALUES ?', [values], function(err,result) {
  if(err) {
     res.send('Error');
  }
 else {
     res.send('Success');
  }
});
});
