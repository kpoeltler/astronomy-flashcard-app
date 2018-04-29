// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_location", "kexol8s1e0v41au", "f67afaju8se5odl6", {
  host: "p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});



// Exports the connection for other files to use
module.exports = sequelize;


// Host	p1us8ottbqwio8hv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	
// Username	kexol8s1e0v41aun	
// Password	f67afaju8se5odl6	
// Port	3306	
// Database	sj26nkgykstxftf8