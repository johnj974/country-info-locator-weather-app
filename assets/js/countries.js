
//for loop needed??


function otherFunction(countryname){$.getJSON("https://restcountries.eu/rest/v2/name/" + countryname,function(data){
    

    let flag = data[0].flag;
    let capital = data[0].capital;
    let population = data[0].population;
    let language = data[0].languages[0].nativeName;
    let region = data[0].region;

    $(".flag").attr(flag)
    $(".capital").append(` ${capital}`)
    $(".population").append(` ${population}`)
    $(".language").append(` ${language}`)
    $(".region").append(` ${region}`)



    
    

   
})}

    