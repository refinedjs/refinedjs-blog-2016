(function() {
	"use strict";
	module.exports = function( grunt ) {
/*
	TODO: - http://ericnish.io/blog/how-to-neatly-separate-grunt-files/			
*/
//================================================================================//
//=========  grunt dependencies  =================================================//
//================================================================================//
		grunt.loadNpmTasks("grunt-contrib-uglify");
		grunt.loadNpmTasks("grunt-contrib-watch");
		grunt.loadNpmTasks("grunt-contrib-cssmin");
		grunt.loadNpmTasks("grunt-mocha-test");
		grunt.loadNpmTasks("grunt-karma");
		grunt.loadNpmTasks("grunt-eslint");
//================================================================================//
//=========  grunt register tasks  ===============================================//
//================================================================================//
		grunt.registerTask("build", [ "verify", "cssmin", "uglify" ]);
		grunt.registerTask("compile", [ "verify", "cssmin", "uglify" ]);
		grunt.registerTask("test", [ "mochaTest:server", "karma" ]);
		grunt.registerTask("verify", ["eslint"]);

//================================================================================//
//=========  grunt event listeners   =============================================//
//================================================================================//
		grunt.event.on( "watch", function( action, filepath, target ) {
			grunt.log.writeln( target + ": " + filepath + " has " + action);
		});		
	
//================================================================================//
//=========  grunt configurations  ===============================================//
//================================================================================//
		grunt.initConfig({
			//load in our package - keep the package up to date. 
			pkg : grunt.file.readJSON( "package.json" ),
			/*
			**-------------------------------------------------------------------------------------
			** GRUNT TASK - watch
			** DESC - This will watch the css directories and js directories and build the js 
			** into one file
			** NOTES - When developing, run grunt watch - this will keep building the changes you make
			** make to the files being watch. This will be important with including the bundled files
			** in view.html.php/default.php (joomla) or whereever this code is being sourced
			**-------------------------------------------------------------------------------------
			*/
			watch : {
				css : {
					files : [ "../public/assets/css/**/*.css" ],
					tasks : [ "cssmin" ]
				},
				js : {
					files : [ "../public/app/**/*.js" ],
					tasks : [ "uglify:app" ]
				},
				eslint : {
					tasks : [ "verify" ],
					files : [
						"../public/app/**/*.js",
						"./framework/**/*.js",
						"./routes/**/*.js",
						"gruntFile.js",
						"server.js",
						"package.js",
						"karma.conf.js"
					]
				}	
			},
			/*
			**-------------------------------------------------------------------------------------
			** GRUNT TASK - cssmin
			** DESC - this will minify all css files. This is done in order in the files array
			**-------------------------------------------------------------------------------------
			*/		
			cssmin : {
				options : {
					shorthandCompacting : false,
					roundingPrecision : -1,
					sourceMap : true				
				},
				target : {
					files : {
						"../public/assets/css/build/app.bundle.min.css" : [
							"../public/bower_components/ng-table/dist/ng-table.min.css",
							"../public/bower_components/ng-dialog/css/ngDialog.min.css",
							"../public/bower_components/ng-dialog/css/ngDialog-theme-default.min.css"
						]
					}
				}
			},
			/*
			**-------------------------------------------------------------------------------------
			** GRUNT TASK - uglify
			** DESC - this will minify all js files included in the files array
			** NOTES - There are 2 options here: dependencies & app
			** DEPENDENCIES TASK**
			** dependencies.min.js - This will be where all the 3rd party libs will get compiled together
			** this will be needed to run once or when ever you add a new dependencies. Since these files
			** do not change, you most likely only neeed to do this ever so often. In view.html.php
			** you will includes this as a script load
			** APP TASK**
			** app.bundle.min.js - This is where all of the source code will live. in view.html.php
			** you will include the script load. Now everytime you add a new js file, add it here.
			** the "watch" task will rebuild and your php file will have the latest code
			**-------------------------------------------------------------------------------------
			*/		
			uglify : {
				dependencies : {
					options : {
						sourceMap : true,
						sourceMapName : "../public/assets/js/build/dependencies-map.map",
						mangle : false
					},
					files : {
						"../public/assets/js/build/dependencies.min.js" : [
							"../public/bower_components/lodash/lodash.min.js",
							"../public/bower_components/angular/angular.min.js",
							"../public/bower_components/angular-route/angular-route.min.js",
							"../public/bower_components/angular-sanitize/angular-sanitize.js",
							"../public/bower_components/angular-ui-router/release/angular-ui-router.min.js",
							"../public/bower_components/ng-table/dist/ng-table.min.js",
							"../public/bower_components/ng-dialog/js/ngDialog.min.js",
							"../public/bower_components/ng-table/dist/ng-table-resizable-columns.src.js",
							"../public/bower_components/angular-ui/angular-ui.min.js"
						]
					}					
				},
				app : {
					options : {
						sourceMap : true,
						sourceMapName : "../public/assets/js/build/app-map.map",
						banner : "/*! <%= pkg.name %> " +
								"<%= grunt.template.today('yyyy-mm-dd') %> */"
					},					
					files : {
						"../public/assets/js/build/app.bundle.min.js" : [
							//core files
							"../public/app/app.js",
							"../public/app/core/core.js",
							"../public/app/core/configs/config.js",
							"../public/app/core/filters.js"
						]
					}
				}
			},
			/*
			**-------------------------------------------------------------------------------------
			** GRUNT TASK - mochaTest
			** DESC - this will run the node server tests.
			**-------------------------------------------------------------------------------------
			*/		
			mochaTest : {

			},
			/*
			**-------------------------------------------------------------------------------------
			** GRUNT TASK - karma
			** DESC - this will run the angular tests
			**-------------------------------------------------------------------------------------
			*/
			karma : {
				unit : {
					configFile : "karma.conf.js"
				}
			},
			/*
			**-------------------------------------------------------------------------------------
			** GRUNT TASK - jslint
			** DESC - This will lint our code
			**-------------------------------------------------------------------------------------
			*/
			eslint : {
				options : {
					configFile : "eslint.json"
				},
				target : [
					"../public/app/**/*.js",
					"./framework/**/*.js",
					"./routes/**/*.js",
					"gruntFile.js",
					"server.js",
					"package.js",
					"karma.conf.js"
				]
			}
			
		});

			
	};
})();