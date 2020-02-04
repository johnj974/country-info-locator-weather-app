


var lat2;
var lng2;



function countryInfo(countryname){$.getJSON("https://restcountries.eu/rest/v2/name/" + countryname, function (data){


    document.querySelector("#flag img").src = data[0].flag;
    document.getElementById("capital").innerHTML=`Capital: ${data[0].capital}`;
    document.getElementById("population").innerHTML=`Population: ${data[0].population}`;
    document.getElementById("language").innerHTML=`Language: ${data[0].languages[0].name}`;
    document.getElementById("region").innerHTML=`Region: ${data[0].region}`;

    
    var lat = data[0].latlng[0];
    lat2 = lat;

    var lng = data[0].latlng[1];
    lng2 = lng;
    return lng2,lat2; 
    
})}


    function newMap() {setTimeout (function(){
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: lat2, lng: lng2}
    
    })},1000);
   
    
}

//--------------------------------------  code below is copied code. see readme file-------------------------------------------------
 fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data=> initialize(data))
.catch(err => console.log("error:",err));

function initialize(countriesData){
    countries=countriesData;
    let options="";
    for(let i=0;i<countries.length;i++){
        options+=`<option value="${countries[i].name}">${countries[i].name}</option>`;
    }
    document.getElementById("country").innerHTML=options;
}


    
 

