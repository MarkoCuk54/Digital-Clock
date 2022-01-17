var today = new Date();


setInterval(displayTime, 1000);


//time
function displayTime() {
    const timeNow = new Date();
    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let time = hoursOfDay + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = time;

}


// date
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
date = dd + '.' + mm + '.' + yyyy;

document.getElementById("date").innerHTML = date;
