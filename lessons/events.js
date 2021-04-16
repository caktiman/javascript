//How to access objects so we cn start watching users on your website.
// 1. What are JavaScript events
// 2. How do we see thees mysterious events?!
// 3/ What can we do with such amazing events?


//addEvenListener () method
// This lsitens for evesnt that the user does on your webpage

document.addEventListener("keydown", showEvent)
document.addEventListener("click", showEvent)
// document.addEventListener("click", sayBye)

// New function that shwos the JS Event
function showEvent (event){
    console.log(event);
    // console.log(event.keyCode)
}


// function sayHi(){
//     console.log("hi")
// }

// function sayBye(){
//     console.log("Bye")
// }

// Create a click event and console log the event
// then choose one of the properties to log to console as well
document.addEventListener("click", showEvent)
document.addEventListener("mousemove", showEvent)

document.addEventListener("keydown", alertUser)

function alertUser (event){
    //If the user presses etc we will shut down
    if (event.key === "Escape"){
        alert("Shutdown!")
    }
}

//Mkae the body of your website change color when you press "Spacebar"
// 1. Add a keypress eventlistener to the document
// 2. find out what the spacebar keycode is
// 3. set up a condition that if spacebar is pressed, change the style of your body (background color)
document.addEventListener("keydown", changeColor)

function changeColor (event){
    //If the user presses etc we will shut down
    if (event.key === " "){
        document.querySelector("body").style.backgroundColor = "#f75b50" 
    }

    if (event.key === "a"){
        document.querySelector("body").style.backgroundColor = "blue" 
    }
}

//chagne teh bg color depending on where the mouse is on the screen.

document.addEventListener("mousemove", changeBackground)

function changeBackground(event) {
    console.log(event);
    document.querySelector("body").style.backgroundColor = `rgb(${event.clientX},${event.clientY},${event.clientY})`
}