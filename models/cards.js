var Sequelize = require("sequelize");

var path = require('path');

// var sequelize = require("../config/connection.js");
var sequelize = require("../config/config.json");

// Define the Astronomy (Card object) for the card table and columns
var Cards = sequelize.define("cards", {
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
        },
        user_desc: {
            type: Sequelize.STRING
        },
        subject: {
            type: Sequelize.STRING
        }
    }, 
    {
        timestamps: true
    });
  
// Syncs with DB
Cards.sync();

module.exports = Cards;
  