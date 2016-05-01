;(function(){
	"use strict";
	var logger, config, express;
	/**
	* Module dependencies.
	*/
	logger = require("mm-node-logger")(module);
	config = require("./framework/configs/config");
	express = require("./framework/configs/express");
	// Initialize server
	function startServer() {
		// Initialize express
		var app = express.init();
		// Start up the server on the port specified in the config
		app.listen(config.server.port, function () {
			var serverBanner = ["",
				"*************************************" + " EXPRESS SERVER ".yellow + "********************************************",
				"*",
				"*" + " App started on localhost port: ".blue + config.server.port + " - with environment: ".blue + config.environment.blue,
				"*",
				"*************************************************************************************************",
				""].join("\n");
			logger.info(serverBanner);
		});
		module.exports = app;
	}
	startServer();
}());
