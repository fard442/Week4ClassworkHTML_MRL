// ================================
// JavaScript Timing Challenges
// ================================

// -----------------------------------------------
// Challenge 1: Basic Timeout
// Use setTimeout to log "Hello after 2 seconds!" after exactly 2000 milliseconds.

function test(){
    console.log("hello after 2 seconds.");
}
setTimeout(test, 2000);


// -----------------------------------------------
// Challenge 2: Countdown
// Write a countdown from 3 to 1 using three setTimeout calls.
// Each number should appear one second apart in the console.

function countdown1(){
    console.log(1)
}
function countdown2(){
    console.log(2)
}
function countdown3(){
    console.log(3)
}
setTimeout(countdown1, 1000);
setTimeout(countdown2, 2000);
setTimeout(countdown3, 3000);





// -----------------------------------------------
// Challenge 3: Repeating Message
// Use setInterval to log "Still going..." every second.
// After 5 seconds, stop the interval using clearInterval.


function infinite(){
    console.log("still going.")
}

let infiniteId = setInterval(infinite, 1000)

function stopInfinite (){
    clearInterval(infiniteId);
    console.log("miraculous")
}

setTimeout(stopInfinite, 3000);


// -----------------------------------------------
// Challenge 4: Delayed Color Change
// Create a <div> in your HTML file with id="box". Put some text in it.
// After 3 seconds, change its background color to blue using setTimeout.



function changeBoxToBlue(){
    let box = document.getElementById("box");
    box.style.backgroundColor = "blue";
}

setTimeout(changeBoxToBlue, 3000);

// -----------------------------------------------
// Challenge 5: Flashing Box
// Create a <div> in your HTML file with id="box2". Put some text in it.
// Using setInterval, make the same box’s background color toggle
// between red and white every half second (500 ms).
// Add a setTimeout to stop the flashing after 5 seconds... or when you click on it!

let isRed =false;

function toggleColorBox2(){
    let box = document.getElementById("box2");
    box.style.backgroundColor = "#ff3355";
    if(isRed){
        box.style.backgroundColor = "white";
    } else {
        box.style.backgroundColor = "#ff3355"
    }
    isRed = !isRed
}

setInterval(toggleColorBox2, 500);


