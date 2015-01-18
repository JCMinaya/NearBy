$(document).ready(function() {
	var element;
	$('.pure-u-1-3').click( function() {
		
		$("#div-s2").html = "";
		element = $(this).html();
		var url = 'https://raw.githubusercontent.com/JCMinaya/NearBy/gh-pages/categories.json';
	    $.ajax({
	       type: 'GET',
	        url: url,
	        async: false,
	        contentType: 'application/json',
	        dataType: 'jsonp',
	        complete: function(json) {
			    $.each( data, function( key, val ) {
		  			if (element == key) {
		  				console.log(key);
		  				var i = 0;
		  				val.forEach(function(objects) {
		  					console.log(objects.name );
		  					$("#div-s2").append('<div id='+i+
		  						' class="pure-u-1-3 intLink bb" href="#s3">'+objects.name+
		  						'</div>');
		  					i++;
		  				});
		  				
		  			};
		  		});
		    }
	    });
	});
	$('.subMenu').smint({
    	'scrollSpeed' : 1000

    });
	
});