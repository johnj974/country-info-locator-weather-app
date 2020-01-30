
// get countriy lat and lang data?
// is center an existing variable?
// include function as a function in countries call?


//https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393

function newMap(center) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 53.3498, lng: -6.2603}/////put data path directly into here and place in countries function???
    
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

