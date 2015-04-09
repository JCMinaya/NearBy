$(document).ready(function() {

	var categoriesArray = [];
	var places = [];
	$.getJSON('https://api.foursquare.com/v2/venues/categories?client_id=ZE0XEDIKNEL33HPJDN0OQF0UTJ1M2XC4H5SAIENPW1QTGBEG&client_secret=J5FTWC2W1PST12EC34BKSKSUXUAJAJXADKM5SEHBAOSFLM3K&v=20130815&ll=40.7,-74',
	    function(data) {
	    	console.log(data);

	        $.each(data.response.categories, function(i,categories){
	        	categoriesArray[i] = $('<div id='+i+' class="pure-u-1-3 intLink wb" href="#s2">'+categories.name+'</div>');
	            $('#div-s1').append(categoriesArray[i]);
	        });
	        
	        $('.pure-u-1-3').click( function() {
	        	$("#div-s2").html("");
		        var myID = $(this).attr('id');
		        var categoryID = data.response.categories[myID].id;
		        $.getJSON('https://api.foursquare.com/v2/venues/search?limit=24&near=DO&categoryId='+categoryID+
		        	'&client_id=ZE0XEDIKNEL33HPJDN0OQF0UTJ1M2XC4H5SAIENPW1QTGBEG'+
		        	'&client_secret=J5FTWC2W1PST12EC34BKSKSUXUAJAJXADKM5SEHBAOSFLM3K&v=20130815', 
		        	function(data) {
	        			console.log(data);
	        			$.each(data.response.venues, function(i, venues){
	        				places[i] = $('<div id="'+i+
		  								  '" class="style pure-u-1-3 bb" href="#s3">'+venues.name+
		  								  '</div>');
		  					$("#div-s2").append(places[i]);
	        			});
	        		$('.pure-u-1-3').click( function() {
	        			var placeID = $(this).attr('id');
	        			var venueSelected = data.response.venues[placeID];
	        			var x = venueSelected.location.lat;
	        			var y = venueSelected.location.lng;
			        	var myLatlng = new google.maps.LatLng(x, y);
					 	Marker(myLatlng, venueSelected.name);
			        });
	        	});
	        });
	    });
	$(this).scrollTop(0);
	
	/*var category;
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
	});*/

	$('.subMenu').smint({
    	'scrollSpeed' : 1000

    });
	
});