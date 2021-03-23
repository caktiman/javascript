/*
Editing css in Java
-Editing Style Properties
-Classes
    -Add, Remove, Toggle

*/

document.querySelector("#main-title").style.color = "red"

// when changing properties with- use camelCase
document.querySelector("#main-title").style.fontStyle = 'italic'

//Editig ClASSES with JS
document.querySelector(".container").classList.add("blue-border")

//how to remove classes
document.querySelector(".container").classList.remove("blue-border")

//How to toggle classes (adds if doesn't exist, and removes if exists)
document.querySelector(".container").classList.toggle("red-bg")

//1. Create a button that when clicked, changges the style of an elemnent.
//2. Crete another button that when clicked, toggle the background of your HTML document's body
// Type ! and press enter in HTML will give you the html declare stuff.

function styleB(){
    document.querySelector("#main-title").style.color = "blue"
}

function toggleB(){
    document.querySelector(".container").classList.toggle("red-bg")
}

/*

1. Audio
2. what are objects
3. Eerything in JS is an object!

*/

var mySong = new Audio("audio/Ken Arai - BLISS.mp3")
var mySong2 = new Audio("audio/Vicetone_Tony_Igy_Astronomia(aka_Coffin_Dance)_Camellia_Remix.mp3")

function playKen(){
    mySong.play()
}

function playRemix(){
    mySong2.play()
}

function pauseKen(){
    mySong.pause()
}

function pauseRemix(){
    mySong2.pause()
}

function resetKen(){
    mySong.load()
}

function resetRemix(){
    mySong2.load()
}
// Play     .play() plays audio object
// Pause    .pause() pause audio object
// Reset    .load()  resets the audio object

//Crete 2 different Audio obejcts (my example ways my Song)
// make the play, pause, and reset using a button 

// Objects are just vairables that store properties (things tha describe the object) and methods (actions or things the object can do)
    // properties-attributes (the description of the obsject)
    // method-actionsthat teh objects can do.


var terence ={

//properties
hair: 'purple',
shirt: 'white',
pants: 'green',    //when creating multiple function, separate them with comma, the last one doesn't need one.

//method:
eat: function () { console.log('Terance is eating!')},
nothing: function () { console.log('Terance is doing nothing!')}

}

// Eveyrthing in Javascript is an object.
// you craeted one using the Audio Object
// document is an Object
// console is an object