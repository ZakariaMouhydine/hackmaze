//Timer starts at 10:00 and countsdown to 09:59 onwards, the below sets these variables
let minute = 2;
let second = 60;
// in built function being used setInterval **repeat a specified function at every given time-interval.**
setInterval( () => {
    if (minute == 0 && second == 1) {
        document.getElementById("counter").innerHTML ="00:00";
    }
//Unless the counter is == 00:00 the following the second will reduce by 1
    else {
        second--;
        // Once the second has be reduced to 00 then the minute will be reduced by 1
        if (second == 0) {
            minute--;
            second=60;
            if (minute == 0) {
                minute = minute;
            }
        }
        //Allows the clock to countdown within the existing digits e.g 03:42
        if (minute.toString().length==1) {
            minute = "0"+minute;
        };
        if (second.toString().length==1) {
            second = "0"+second;
        };
// this obtains the new minute and second that is not 00:00
        document.getElementById("counter").innerHTML = minute+":"+second;
    }
    // countdown 1000 times from the interval function as the timer in .html is set as 10:00
}, 1000);