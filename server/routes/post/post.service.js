;(function() {
"use strict";
//================================================================================//
//=========  include modules  ====================================================//
//================================================================================//
	var  _, fileExists, base_path, pug, fs, moment;
	_ = require( "lodash" );
	fileExists = require( "file-exists" );
	pug = require( "pug" );
	fs = require( "fs" );
	moment = require( "moment" );
	base_path = process.env.PWD;

//================================================================================//
//=========  export public api  ==================================================//
//================================================================================//
	module.exports = {
		postExists : postExists,
		compilePost : compilePost,
		getPageTitle : getPageTitle,
		getPost : getPost
	};
//================================================================================//
//=========  public methods  =====================================================//
//================================================================================//
	/*
	** METHOD - getPost
	** DESC - This will get the post
	*/
	function getPost( post_id ){
		var post;
		post = JSON.parse( fs.readFileSync( base_path + "/data/posts.json", "utf8" ) );		
		post = ( 
			_.chain( post.posts )
				.where( { id : post_id } )
				.first()
				.value()
		);
		console.log( moment( "5/20/2016" ).format( "x" ) );
		post.created_date = moment.unix( post.created_date ).utc().format( "M-D-YYYY" );
		return post;
	}
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
