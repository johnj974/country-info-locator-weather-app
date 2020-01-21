

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("api").innerHTML = this.responseText;
    }
};

xhr.open("GET", "http://api.weatherstack.com/");

xhr.send();