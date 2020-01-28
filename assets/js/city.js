

/*let userInput;

function setup(){
    userInput = select("#userinput");
    userInput.changed(goWiki);
}*/

function cityFunction(cityname){$.getJSON("https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + cityname,function(data){
     
    document.querySelector("#cityinfo a").href = data[3][0]
    //let city = data[3][0];
    console.log(data[3][0])
     //$(".cityinfo").append(city);
})};



