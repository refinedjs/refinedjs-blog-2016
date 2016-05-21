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
		app.route( "/" ).get(function( req, res ){
			res.render( 'index', { page_title : "The Pursuit To Refining Javascript" });
		});
		app.route( "/contributors" ).get(function( req, res ){
			res.render( 'contributors', { page_title : "Our Contributors" });
		});
		app.route( "/why" ).get(function( req, res ){
			res.render( 'why', { page_title : "Why Did We Start Refined JS?" });
		});
		app.route( "/health-check" ).get( function( req, res ){
			res.send( "OK" );
		});
	}
}());