let url ="https://restcountries.eu/rest/v2/name/"

$.getJSON("https://restcountries.eu/rest/v2/name/spain",function(data){
    

    let flag = data[0].flag;
    let capital = data[0].capital;
    let population = data[0].population;
    let language = data[0].languages[0].nativeName;
    let region = data[0].region;

    $(".flag").attr(flag)
    $(".capital").append(`Capital: ${capital}`)
    $(".population").append(`Population: ${population}`)
    $(".language").append(`Native Language: ${language}`)
    $(".region").append(`Region: ${region}`)

    var input;

    var button = select("#button");
    button.mousePressed(countryInfo);

    function countryInfo(){

    input = select("#search")    
    }

   
})


