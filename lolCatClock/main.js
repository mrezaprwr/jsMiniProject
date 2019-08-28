// Initialization variable for indication clock
var wakeuptime = 6;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

/// Get te current time on page

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
    // Change hours format to 12 scale
    if(hours > noon) {
        hours = hours -  12;
    }
    // Change Hours Format
    if(hours < 10) {
        hours = "0" + hours;
    }
    // Change minutes format
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    //Change seconds format
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    // Put together string format to display in Web
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    
    clock.innerText =  clockTime;
};
/// Getting the clock to increment on its own and 
/// change out messages and pictures

var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "https://img2.thejournal.ie/inline/3576825/original/?width=630&version=3576825";

    var timeEventJS = document.getElementById('timeEvent');
    var memePhotoJS = document.getElementById('memePhoto');


    if(time == partytime) {
        image = "https://i.ytimg.com/vi/9bzQ3w9ymvs/maxresdefault.jpg";
        messageText = "Let's Parteeyyyyy";
    } else if (time == wakeuptime) {
        image = "https://i.kym-cdn.com/entries/icons/mobile/000/026/299/jim.jpg";
        messageText = "It's time to wake up!!";
    } else if(time == lunchtime) {
        image = "https://i.pinimg.com/originals/92/7f/f0/927ff005b32fa6a55c9cf49652aaeee9.jpg";
        messageText = "Don't make your belly wait!";
    } else if(time == naptime) {
        image = "https://socialnewsdaily.com/wp-content/uploads/2018/07/rsz_014.jpg";
        messageText = "It's nap time!";
    } else if(time < noon) {
        image = "https://img1.looper.com/img/gallery/was-jim-halpert-from-the-office-secretly-a-sociopath/intro-1565015060.jpg";
        messageText = "Gutten Morgen :)";
    } else if(time >= evening) {
        image = "https://imgix.bustle.com/uploads/image/2018/4/26/d8b70c87-3b30-4651-bf36-c98e93832ba0-screen-shot-2018-04-26-at-34430-pm.png?w=970&h=546&fit=crop&crop=faces&auto=format&q=70";
        messageText = "Good Evening!";
    } else {
        image = "https://img.buzzfeed.com/buzzfeed-static/static/2018-02/28/17/asset/buzzfeed-prod-fastlane-03/sub-buzz-4397-1519856584-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*";
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
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#D6C3C9";
    } else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#343F39";
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

