

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=ireland&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a",function(data){
    

   

    let icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    document.getElementById("weather").innerHTML=data.weather[0].main;
    document.getElementById("temp").innerHTML= `${Math.round(data.main.temp)} degrees celsius`;
    

    $(".icon").attr("src",icon);
    
});

 