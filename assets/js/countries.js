







function otherFunction(countryname){$.getJSON("https://restcountries.eu/rest/v2/name/" + countryname,function(data){


    document.querySelector("#flag img").src = data[0].flag;
    document.getElementById("capital").innerHTML=data[0].capital;
    document.getElementById("population").innerHTML=data[0].population;
    document.getElementById("language").innerHTML=data[0].languages[0].nativeName;
    document.getElementById("region").innerHTML=data[0].region;
   
    let countryNames;
    countryNames = data[0].name;
    console.log(countryNames)
    let options = "";
    for(let i=0;i<countryNames.length;i++){
        option += `<option value="${countryNames[i].alpha3Code}">${countryNames[i].name}</option>`;
    }

    document.getElementById("search").innerHTML=option;
      

   
   
})}

    $("#country").click(function() {
    $('html, body').animate({
        scrollTop: $("#country-info").offset().top
    }, 2000);
});


      

   
