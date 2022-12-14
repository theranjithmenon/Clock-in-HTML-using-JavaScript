function ShowTime() {

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var time = new Date();

    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var session = document.getElementById('session');

    var day = time.getDate();
    var month = time.getMonth();
    var whichDay = time.getDay();


    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour < 10) {
        document.getElementById('hour').innerHTML = "0" + hour;
    }
    else {
        document.getElementById('hour').innerHTML = hour;
    }

    if (hour >= 12) {
        session.innerHTML = 'PM';
    }

    if (minute < 10) {
        document.getElementById('minute').innerHTML = "0" + minute;

    }
    else {
        document.getElementById('minute').innerHTML = minute;
    }


    if (second < 10) {
        document.getElementById('second').innerHTML = "0" + second;
    }
    else {
        document.getElementById('second').innerHTML = second;
    }

    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('whichDay').innerHTML = days[whichDay];

}

setInterval(ShowTime, 10);