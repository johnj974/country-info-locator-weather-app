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