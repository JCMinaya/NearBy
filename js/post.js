$(document).ready(function() {
	var element;
	$('.pure-u-1-3').click( function() {
		/* Act on the event */
		/*$.get('https://api.foursquare.com/v2/venues/search?ll=40.7, 40.55
			&client_id=ZE0XEDIKNEL33HPJDN0OQF0UTJ1M2XC4H5SAIENPW1QTGBEG
			&client_secret=J5FTWC2W1PST12EC34BKSKSUXUAJAJXADKM5SEHBAOSFLM3K', function(data) {
			optional stuff to do after success 
			alert(data);*/
		element = $(this).html();
		var url = 'http://localhost/categories.json';
	    $.ajax({
	       type: 'GET',
	        url: url,
	        async: false,
	        contentType: "application/json",
	        dataType: 'jsonp',
	        complete: function(json) {
		    
			    $.each( data, function( key, val ) {
		  			if (element == key) {
		  				console.log(key);
		  				console.log(val);
		  			};
		  		});
		    },
	    });
		/*$.getJSON( "http://localhost/categories.json/callback=?", function( data ) {
		  	var items = [];
		  	console.log(data);
			alert(data[0].name);
		  	$.each( data, function( key, val ) {
		  		
		  	});
		});*/
	});
	$('.subMenu').smint({
    	'scrollSpeed' : 1000

    });
	
});