(function() {
	"use strict";
	angular.module( "app.boilerplate" ).config( fnRoute );
	fnRoute.$inject = [ "$urlRouterProvider", "$stateProvider" ];
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - fnRoute
	** DESC - 
	**-------------------------------------------------------------------------------------
	*/
	function fnRoute( $urlRouterProvider, $stateProvider ) {
		$urlRouterProvider.otherwise( "/" );
		$stateProvider.state( "boilerplate", {
			url : "/:show_message",
			templateUrl : "/ui-directory-search/v0/public/app/routes/boilerplate/_.html",
			controller : "BoilerplateController",
			controllerAs : "vm"
		});
	}
}());
