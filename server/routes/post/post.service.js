;(function() {
"use strict";
//================================================================================//
//=========  include modules  ====================================================//
//================================================================================//
	var  _, fileExists, base_path, pug;
	_ = require( "lodash" );
	fileExists = require( "file-exists" );
	pug = require( "pug" );
	base_path = process.env.PWD;

//================================================================================//
//=========  export public api  ==================================================//
//================================================================================//
	module.exports = {
		postExists : postExists,
		compilePost : compilePost,
		getPageTitle : getPageTitle
	};
//================================================================================//
//=========  public methods  =====================================================//
//================================================================================//
	/*
	** METHOD - getPageTitle
	** DESC - This will get our page title
	*/
	function getPageTitle( post ){
		var data;
		data = {
			"bind-to-controller" : "BindToController - Why this is so damn useful?",
			"angular-validators" : "Using NgModelController $validators and $asyncValidators to validate form fields"
		};
		return data[ post ];
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - postExists
	** DESC - this will check if the post exists or not
	**-------------------------------------------------------------------------------------
	*/
	function postExists( post ){
		if( _.isNull( post ) || post.length === 0 ){
			return false;
		}
		return fileExists( base_path + "/views/posts/" + post + ".pug" );
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - 
	** DESC - 
	**-------------------------------------------------------------------------------------
	*/
	function compilePost( post ){
		var post_path;
		post_path = base_path + "/views/posts/" + post + ".pug";
		return pug.compileFile( post_path );
	}
//================================================================================//
//=========  private methods =====================================================//
//================================================================================//
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - 
	** DESC - 
	**-------------------------------------------------------------------------------------
	*/
}());
