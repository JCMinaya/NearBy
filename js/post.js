$(document).ready(function() {
	$(this).scrollTop(0);
	var category;
	$('.pure-u-1-3').click( function() {
		
		//Getting the category clicked
		category = $(this).html();
		$("#label").html(category);
		var url = 'https://raw.githubusercontent.com/JCMinaya/NearBy/gh-pages/categories(2).json';
	    $.ajax({
	       type: 'GET',
	        url: url,
	        async: false,
	        contentType: 'application/json',
	        dataType: 'jsonp',
	        complete: function(json) {
	        	$("#div-s2").html("");
	        	var places = [];
			    $.each( data, function( key, val ) {
			    //the key refers to categories and val to places.
		  			if (category == key) {
		  				console.log(key);
		  				var i = 0;
		  				val.forEach(function(objects) {
		  					console.log(objects.name );
		  					places[i] = $('<div id="'+i+
		  						'" class="style pure-u-1-3 bb" href="#s3">'+objects.name+
		  						'</div>');
		  					$("#div-s2").append(places[i]);
		  					i++;
		  				});
		  				$("#div-s2").on('click', '.style', function(event) {
		  					var placeName = val[event.target.id].name;
			  				console.log(placeName);
			  				var x = val[event.target.id].latitud;
			  				var y = val[event.target.id].longitud;
			  				var myLatlng = new google.maps.LatLng(x, y);
				  			Marker(myLatlng, placeName);
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