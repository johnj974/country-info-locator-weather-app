


//let url="https://api.openweathermap.org/data/2.5/weather?q=tralee&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a",gotData;


function countryweather(countryname) {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + countryname + "&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a", function (citydata) {
    
    
    let windDirection = citydata.wind.deg;

    document.getElementById("weather2").innerHTML=citydata.weather[0].main;
    document.getElementById("temp2").innerHTML= `${Math.round(citydata.main.temp)} degrees celsius`;
    document.getElementById("wind2").innerHTML=`Wind Speed: ${Math.round(citydata.wind.speed)} KPH`;
    document.getElementById("direction2").innerHTML=windDirection;
    document.getElementById("humidity2").innerHTML=`${citydata.main.humidity} degrees humidity`;


    if(windDirection>=270){
    document.getElementById("direction2").innerHTML= "Wind Direction: Northerly"
    }else if(windDirection>=180){
    document.getElementById("direction2").innerHTML= "Wind Direction: Westerly"
    }else if(windDirection>=90){
    document.getElementById("direction2").innerHTML= "Wind Direction: Southerly"
    }else if(windDirection>=0){
    document.getElementById("direction2").innerHTML= "Wind Direction: Easterly"
    }

    



    

    
})};

   $("#totop").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 2000);
});
 