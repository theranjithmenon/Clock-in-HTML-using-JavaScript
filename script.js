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

    if (hour >= 12) {
        session.innerHTML = 'PM';
    }

    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('whichDay').innerHTML = days[whichDay];

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
}

setInterval(ShowTime, 10);