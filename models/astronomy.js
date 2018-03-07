var Sequelize = require("sequelize");

var path = require('path');

// var sequelize = require("../config/connection.js");
var sequelize = require("../config/config.json");

// Define the Astronomy object for the astronomy table and columns
var Astronomy = sequelize.define("astronomy", {
    copyright : {
      type : Sequelize.STRING
    },
    date: {
      type: Sequelize.STRING
    },
    explanation: {
      type: Sequelize.STRING
    },
    hdurl: {
        type: Sequelize.STRING
    },
    media_type: {
        type: Sequelize.STRING
    },
    service_version: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    }
    }, {
        timestamps: true
});
  
// Syncs with DB
Astronomy.sync();

module.exports = Astronomy;
  