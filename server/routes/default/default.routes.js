(function() {
	"use strict";

//================================================================================//
//========= export routes  =======================================================//
//================================================================================//
	module.exports = setRoutes;
	
//================================================================================//
//=========  routes  =============================================================//
//================================================================================//
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - setRoutes
	** DESC - container for all the routes for this module 
	**-------------------------------------------------------------------------------------
	*/
	function setRoutes( app ) {
		var meta_desc = "The Pursuit To Refining Javascript, AngularJS, NodeJS, jQuery, HTML5, AJAX, UI, UX, and all aspects of web application development.";
		app.route( "/" ).get(function( req, res ){
			res.render( 'index', { page_title : "The Pursuit To Refining Javascript", meta_desc : meta_desc });
		});
		app.route( "/contributors" ).get(function( req, res ){
			res.render( 'contributors', { page_title : "Our Contributors", meta_desc : meta_desc });
		});
		app.route( "/why" ).get(function( req, res ){
			res.render( 'why', { page_title : "Why Did We Start Refined JS?", meta_desc : meta_desc });
		});
		app.route( "/health-check" ).get( function( req, res ){
			res.send( "OK" );
		});
	}
}());