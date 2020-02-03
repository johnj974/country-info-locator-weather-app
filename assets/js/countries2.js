


var lat2;
var lng2;



function otherFunction(countryname){$.getJSON("https://restcountries.eu/rest/v2/name/" + countryname,function(data){


    document.querySelector("#flag img").src = data[0].flag;
    document.getElementById("capital").innerHTML=`Capital: ${data[0].capital}`;
    document.getElementById("population").innerHTML=`Population: ${data[0].population}`;
    document.getElementById("language").innerHTML=`Language: ${data[0].languages[0].nativeName}`;
    document.getElementById("region").innerHTML=`Region: ${data[0].region}`;

    
    var lat = data[0].latlng[0];
    lat2 = lat;


    var lng = data[0].latlng[1];
    lng2 = lng;
    return lng2,lat2; 

    
})}

console.log(lat2);



    function newMap() {setTimeout (function(){
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: lat2, lng: lng2}
    
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    })},500);
}


    $("#country").click(function() {
    $('html, body').animate({
        scrollTop: $("#country-info").offset().top
    }, 2000);
});



    $("#tomap").click(function() {
            $('html, body').animate({
                scrollTop: $("#map").offset().top
            }, 2000);
});

    $("#tobottom2").click(function() {
        $('html, body').animate({
            scrollTop: $("#bottom").offset().top
        }, 2000);
});
    
 

