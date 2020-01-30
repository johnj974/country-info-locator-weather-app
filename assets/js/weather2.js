


//let url="https://api.openweathermap.org/data/2.5/weather?q=tralee&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a",gotData;





let address = "https://api.openweathermap.org/data/2.5/weather?q=";
let country = "germany";
let units = "&units=metric";
let key = "&APPID=2a1b20e296836689a2296c960cf5a29a";
let input;


function countryweather(countryname){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+countryname+"&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a",function(citydata){
    

    let windDirection = citydata.wind.deg;

    document.getElementById("weather2").innerHTML=citydata.weather[0].main;
    document.getElementById("temp2").innerHTML= `${Math.floor(citydata.main.temp)} degrees celsius`;
    document.getElementById("wind2").innerHTML=`Wind Speed: ${Math.floor(citydata.wind.speed)} KPH`;
    document.getElementById("direction2").innerHTML=windDirection;
    document.getElementById("humidity2").innerHTML=`${citydata.main.humidity} degrees humidity`;

    if(windDirection>=270){
    document.getElementById("direction2").innerHTML= "Northerly"
    }else if(windDirection>=180){
    document.getElementById("direction2").innerHTML= "Westerly"
    }else if(windDirection>=90){
    document.getElementById("direction2").innerHTML= "Southerly"
    }else if(windDirection>=0){
    document.getElementById("direction2").innerHTML= "Easterly"
    }


    

    input = select("#search")
})};

   $("#totop").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 2000);
});
 