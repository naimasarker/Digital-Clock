setInterval(function digital(){
    var d = new Date();
    var sec = d.getSeconds();
    var min = d.getMinutes();
    var hour = d.getHours();
    var ampm = "AM";   
    if(hour >= 12){
        hour = hour - 12;
        ampm = "PM";
    }
    else if(hour == 0){
        hour = 12;
        ampm = "AM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    var secTime = document.getElementById('sec').innerText = sec;
    var minTime = document.getElementById('min').innerText = min;
    var hourTime = document.getElementById('hour').innerText = hour;
    var am_pm = document.getElementById('am_pm').innerText = ampm;
},1000);