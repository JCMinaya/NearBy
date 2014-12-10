var map;
function initialize() {
  var mapOptions = {
    zoom: 18,
    center: new google.maps.LatLng(18.487893, -69.962741)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);