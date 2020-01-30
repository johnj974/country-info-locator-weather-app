


function otherFunction(countryname){$.getJSON("https://restcountries.eu/rest/v2/name/" + countryname,function(data){


    document.querySelector("#flag img").src = data[0].flag;
    document.getElementById("capital").innerHTML=`Capital: ${data[0].capital}`;
    document.getElementById("population").innerHTML=`Population: ${data[0].population}`;
    document.getElementById("language").innerHTML=`Language: ${data[0].languages[0].nativeName}`;
    document.getElementById("region").innerHTML=`Region: ${data[0].region}`;
   
    
   
})}

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
 


      

   
