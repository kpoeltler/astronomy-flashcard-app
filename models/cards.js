'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;




















// var Sequelize = require("sequelize");

// var config = require(__dirname + '/../config/config.json')[env];
// var path = require("path");
// var env  = process.env.NODE_ENV || 'development';

// var sequelize = new Sequelize(process.env[config.use_env_variable]);
// module.exports = function(sequelize, Sequelize) {
  // Define the Astronomy (Card object) for the card table and columns from the db
//   var Cards = sequelize.define(
//     "card",
//     {
//       copyright: {
//         type: Sequelize.STRING
//       },
//       date: {
//         type: Sequelize.STRING
//       },
//       explanation: {
//         type: Sequelize.STRING
//       },
//       hdurl: {
//         type: Sequelize.STRING
//       },
//       media_type: {
//         type: Sequelize.STRING
//       },
//       service_version: {
//         type: Sequelize.STRING
//       },
//       title: {
//         type: Sequelize.STRING
//       },
//       url: {
//         type: Sequelize.STRING
//       },
//       user_desc: {
//         type: Sequelize.STRING
//       },
//       subject: {
//         type: Sequelize.STRING
//       }
//     },
//     {
//       timestamps: true
//     }
//   );
//   return Cards;
// };
// Syncs with DB
// Cards.sync();

// Makes the Cards Model available for other files (and will also create a table)
// module.exports = Cards;
