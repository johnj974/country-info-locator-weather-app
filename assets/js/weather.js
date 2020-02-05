
// --------------------------------------------------------------local weather----------------------------------------------------------
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=ireland&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a",function(data){
    

   

    let icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    document.getElementById("weather").innerHTML=data.weather[0].main;
    document.getElementById("temp").innerHTML= `${Math.round(data.main.temp)} degrees celsius`;
    

    $(".icon").attr("src",icon);
    
});


//---------------------------------------------------------------country weather-------------------------------------------------------------------
function countryweather(countryname) {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + countryname + "&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a", function (citydata) {
    
                                                                                        //function that takes in value of id=country selection
                                                                                        //to get weather data using that selection
    let windDirection = citydata.wind.deg;

    document.getElementById("weather2").innerHTML=citydata.weather[0].main;
    document.getElementById("temp2").innerHTML= `${Math.round(citydata.main.temp)} degrees celsius`;
    document.getElementById("wind2").innerHTML=`Wind Speed: ${Math.round(citydata.wind.speed)} KPH`;
    document.getElementById("direction2").innerHTML=windDirection;
    document.getElementById("humidity2").innerHTML=`${citydata.main.humidity} degrees humidity`;


    if(windDirection>=270){
    document.getElementById("direction2").innerHTML= "Wind Direction: Northerly"          // added this code to show wind as a direction
    }else if(windDirection>=180){
    document.getElementById("direction2").innerHTML= "Wind Direction: Westerly"
    }else if(windDirection>=90){
    document.getElementById("direction2").innerHTML= "Wind Direction: Southerly"
    }else if(windDirection>=0){
    document.getElementById("direction2").innerHTML= "Wind Direction: Easterly"
    }
    
    
})};

  
 