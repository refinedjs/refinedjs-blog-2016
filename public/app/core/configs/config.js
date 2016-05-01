(function() {
	"use strict";
	angular.module( "app.core" )
		.config( onConfig )
		.run( onRun );

	//injectors	
	onConfig.$inject = [ "$urlRouterProvider" ];	
	onRun.$inject = [ "$rootScope", "$location" ];
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - onConfig
	** DESC - on config setup
	**-------------------------------------------------------------------------------------
	*/
	function onConfig( $urlRouterProvider ) {
		//default to the root of the app
		$urlRouterProvider.otherwise( "/" );
		$urlRouterProvider.when( "", "/" );
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - onRun
	** DESC - on run setup
	**-------------------------------------------------------------------------------------
	*/
	function onRun( $rootScope ) {
		$rootScope.$on( "$stateChangeSuccess", function() {
			return;
		});
		return;
	}
}());
