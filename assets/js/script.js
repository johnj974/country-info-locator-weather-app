//--------------------------------------------------------------clock----------------------------------------------------------------------
function clock() {
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

    if(hour>=17){
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
// ----------------------------------------------------------calender------------------------------------------------------------------------------
function calender(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let cal = day + " " + months[month] + "," + year;

    document.getElementById("date").innerText= cal;
    document.getElementById("date").innerContent = cal;
    
    
} 

calender();

//-------------------------------------------------------------scrolling buttons------------------------------------------------------------------------

    $("#search").click(function() {
    $('html, body').animate({
        scrollTop: $("#country-info").offset().top
    }, 2000);
});

    $("#tomap").click(function() {
            $('html, body').animate({
                scrollTop: $("#scroll2").offset().top
            }, 2000);
});

    $("#tobottom2").click(function() {
        $('html, body').animate({
            scrollTop: $("#bottom").offset().top
        }, 2000);
});

    $("#totop").click(function() {
        $('html, body').animate({
            scrollTop: $("#top").offset().top
    }, 2000);
});
 