


var lat2;
var lng2;
var test2 = "";


function otherFunction(countryname){$.getJSON("https://restcountries.eu/rest/v2/name/" + countryname,function(data){


    document.querySelector("#flag img").src = data[0].flag;
    document.getElementById("capital").innerHTML=`Capital: ${data[0].capital}`;
    document.getElementById("population").innerHTML=`Population: ${data[0].population}`;
    document.getElementById("language").innerHTML=`Language: ${data[0].languages[0].nativeName}`;
    document.getElementById("region").innerHTML=`Region: ${data[0].region}`;

    //let coord = data[0].latlng[1];
    //console.log(coord)

    var lat = data[0].latlng[0];
    lat2 = lat;
   // return lat2;

    var lng = data[0].latlng[1];
    lng2 = lng;
    return lng2,lat2; 

    
    //console.log(lng)

     //var test = "53.3498"
     //test2 = test
     //return test2

    
    // console.log(test2)

    // console.log(lat)
    // console.log(lng)
})}

console.log(lat2);

  
   
   
   /* <script>
function myFunction() {
  setTimeout(function(){ alert("Hello"); }, 3000);
}
</script>*/


    function newMap() {setTimeout (function(){
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: lat2, lng: lng2}/////put data path directly into here and place in countries function???
    
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    })},1000);
}


    $("#country").click(function() {
    $('html, body').animate({
        scrollTop: $("#country-info").offset().top
    }, 2000);
});

    $("#tobottom").click(function() {
        $('html, body').animate({
            scrollTop: $("#bottom").offset().top
        }, 2000);
});
 

