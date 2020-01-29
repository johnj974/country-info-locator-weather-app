
//for loop needed??


function otherFunction(countryname){$.getJSON("https://restcountries.eu/rest/v2/name/" + countryname,function(data){
    

   
    let capital = data[0].capital;
    let population = data[0].population;
    let language = data[0].languages[0].nativeName;
    let region = data[0].region;
    

    document.querySelector("#flag img").src = data[0].flag;
    $(".capital").append(` ${capital}`)
    $(".population").append(` ${population}`)
    $(".language").append(` ${language}`)
    $(".region").append(` ${region}`)   

   
})}

    $("#country").click(function() {
    $('html, body').animate({
        scrollTop: $("#results").offset().top
    }, 2000);
});
      