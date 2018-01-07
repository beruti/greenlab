/* DB setup */
var mongoose    = require('mongoose');
// Configuration
var config = require('../config'); // get our config file

module.exports = function () 
	{
		mongoose.connect(config.database, { useMongoClient: true }); // connect to database
	};