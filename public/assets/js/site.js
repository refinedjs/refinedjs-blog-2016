;(function( $ ){
	//open all external links in new tabs		
	$( ".post" ).on( "click", "a[ rel='_blank' ]", fnReplaceTargetBlank );
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - fnReplaceTargetBlank
	** DESC - This will replace all target blank post
	**-------------------------------------------------------------------------------------
	*/
	function fnReplaceTargetBlank( vent ){
		window.open( $( this ).attr( 'href' ) );
		vent.preventDefault();		
	}
})( jQuery );