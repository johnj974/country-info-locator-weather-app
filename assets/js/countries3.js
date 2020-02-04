

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data=> initialize(data))
.catch(err => console.log("error:",err));

function initialize(countriesData){
    countries=countriesData;
    let options="";
    for(let i=0;i<countries.length;i++){
        options+=`<option value="${countries[i].name}">${countries[i].name}</option>`;
    }
    document.getElementById("country").innerHTML=options;
}






    
