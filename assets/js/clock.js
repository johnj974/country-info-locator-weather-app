
function clock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    hour = updateTime(hour);
    minute = updateTime(minute);
    seconds = updateTime(seconds);
    let time = hour + ":" + minute + ":" + seconds;


    document.getElementById("clock").innerText= time;
    document.getElementById("clock").innerContent = time;
    
    setTimeout(clock,1000);

    if(hour>=18){
    document.getElementById("greeting").innerHTML= "Good Evening"
    }else if(hour>=12){
    document.getElementById("greeting").innerHTML= "Good Afternoon"
    }else if(hour>=0){
    document.getElementById("greeting").innerHTML= "Good Morning"
    }



} 

function updateTime(i){
    if(i<10){
        return "0"+i;
    }else{
        return i;
    }
}

clock();

