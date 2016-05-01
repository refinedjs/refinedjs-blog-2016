(function() {
	"use strict";
	var config = {};
	config.environment = process.env.NODE_ENV || "dev";
	// Upload files in memory
	config.uploadFilesInMemory = process.env.UPLOAD_FILES_IN_MEMORY || false;
	// Server settings
	config.server = {
		host : "http://" + process.env.SERVICE_ROUTER_HOST || "http://localhost:8080",
		port : process.env.NODE_PORT || process.env.PORT || 3000
	};
	config.new_relic = {
		license_key : process.env.NEW_RELIC_LICENSE_KEY || "",
		app_name : process.env.NEW_RELIC_APP_NAME || ""
	};
	//live reload
	config.live_reload = {
		port : process.env.NODE_LIVERELOAD || 35729
	};
	// Export configuration object
	config.log_resources_calls = process.env.LOG_RESOURCE_CALLS || true;
	
	//export module info
	config.module_name = process.env.MODULE_NAME || "";

	//export docker_tag_name
	config.docker_tag_name = process.env.DOCKER_TAG_NAME || "";
	
	config.resource_name = process.env.RESOURCE_NAME || "";
	config.module_version = process.env.MODULE_VERSION || "";
	config.resource_path = "/" + config.resource_name + "/" + config.module_version;
	config.assets_path = "/" + config.module_name + "/" + config.module_version;

	module.exports = config;
}());
