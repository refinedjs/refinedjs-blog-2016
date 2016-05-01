;(function() {
	"use strict";
	//create all of the directives on "core" module
	angular.module("app.core").directive( "directive", fnDirective );
	fnDirective.$inject = [];
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - 
	** DESC - 
	**-------------------------------------------------------------------------------------
	*/
	function fnDirective(){
		return {
			restrict : "AE",
			replace : true,
			template : "",
			scope : {
				options : "="
			},
			link : function(){}
		};
	}
}());


