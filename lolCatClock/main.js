// Initialization variable for indication clock
var wakeuptime = 6;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Get te current time on page

var showCurrentTime = function(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    ///Set 24 Hours format to AM - PM
    // Check whether it's AM or PM
    if(hours >= noon) {
        meridian = "PM";
    }
    // Change hours format
    if(hours > noon) {
        hours -= 12;
    }
    // Change minutes format
    if(minutes < 10) {
        minutes += "0";
    }
    //Change seconds format
    if(seconds < 10) {
        seconds += "0";
    }

    // Put together string format to display in Web
    var clockTime = hours + ":" + minutes + ":" + seconds;
    clock.innerText =  clockTime;
};
/// Getting the clock to increment on its own and 
/// change out messages and pictures

var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "https://socialnewsdaily.com/wp-content/uploads/2018/07/rsz_014.jpg";

    var timeEventJS = document.getElementById('timeEvent');
    var memePhotoJS = document.getElementById('memePhoto');


    if(time == partytime) {
        image = "";
        messageText = "Let's Parteeyyyyy";
    } else if (time==wakeuptime) {
        image = "";
        messageText = "It's time to wake up!!";
    } else if(time == lunchtime) {
        image = "";
        messageText = "Don't make your belly wait!";
    } else if(time == naptime) {
        image = "";
        messageText = "It's nap time!";
    } else if(time < noon) {
        image = "";
        messageText = "Gutten Morgen :)";
    } else if(time == evening) {
        image = "";
        messageText = "Good Evening!";
    } else {
        image = "";
        messageText = "Good Afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    memePhotoJS.src = image;
    
    showCurrentTime();
};
updateClock();

/// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

/// Make the Party Time Button Work
var partyButton = document.getElementById('partyTimeButton');

var partyEvent = function() {
    if(partytime < 0) {
        partytime = new Date().getHours();
        partyButton.innerText = "Party Over!";
        partyButton.style.backgroundColor = "#D6C3C9";
    } else {
        partytime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor("#343F39");
    }
};

/// Click the button to run the function
partyButton.addEventListener("click", partyEvent);
partyEvent(); //Unsure about the occurrence

/// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

var wakeUpEvent = function() {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change",wakeUpEvent);

/// Activates Lunchtime Selector
var lunchTimeSelector = document.getElementById('lunchTimeSelector');

var lunchTimeEvent = function() {
    lunchtime = lunchTimeSelector.value;
}

lunchTimeSelector.addEventListener("change", lunchTimeEvent);

/// Activates Naptime Selector

var napTimeSelector = document.getElementById('napTimeSelector');

var napTimeEvent = function() {
    naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener('change', napTimeEvent);

