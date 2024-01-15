// Set the date we're counting down 
var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// update the countdown every 1000 milliseconds

var x = setInterval(() =>{
    //Get the current date and time
    var now = new Date().getTime();

    //Calculate the remaining time
    var difference = countDownDate - now;

    //Calculate days, hours, minutes and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60 ));
    var seconds = Math.floor((difference % (1000 * 60  )) / 1000 );
    // display the countdown
    document.querySelector(".days").innerHTML = formatTime(days);
    document.querySelector(".hours").innerHTML = formatTime(hours);
    document.querySelector(".minutes").innerHTML = formatTime(minutes);
    document.querySelector(".seconds").innerHTML = formatTime(seconds);

    // if the countdown is over, display a message
    if (difference < 0) {
        clearInterval(x);
        document.querySelector(".container-box").innerHTML = "EXPIRED";
    }
 }, 1000);
    // Helper function to format time with leading zeros
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
   
 