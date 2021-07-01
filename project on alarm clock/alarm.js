console.log("Alarm Clock");
function updateClock() {
    // Get the current time:
    let currentTime = new Date();
    // extract hour, minute, and seconds from the date:
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // padding with "0" when hours,minutes or seconds < 10(single digit):
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // setting AM & PM:
    let timeOfDay = (currentHours < 12) ? "AM" : "PM"; //ternary operator

    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    currentTimeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;  

    document.getElementById("clock").innerHTML = currentTimeStr;

}

updateClock();







