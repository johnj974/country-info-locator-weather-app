//   2a1b20e296836689a2296c960cf5a29a   api key
//   api.openweathermap.org/data/2.5/weather?q=dublin&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a

/*$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=tralee&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a",function(data){
    

    /*let icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let weather = data.weather[0].main;
    let temp = Math.floor(data.main.temp);
    

    $(".icon").attr("src",icon);
    $(".weather").append(weather);
    $(".temp").append(`${temp} `);
    

    // add in maybe auto update or city selector
});*/


//let url="https://api.openweathermap.org/data/2.5/weather?q=tralee&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a",gotData;





let address = "https://api.openweathermap.org/data/2.5/weather?q=";
let country = "germany";
let units = "&units=metric";
let key = "&APPID=2a1b20e296836689a2296c960cf5a29a";

function cityweather(){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=tralee&units=metric&APPID=2a1b20e296836689a2296c960cf5a29a",function(citydata){
    console.log(citydata)
    document.getElementById("weather2").innerHTML="hello";
    document.getElementById("temp2").innerHTML="temperature";
    
})};

 