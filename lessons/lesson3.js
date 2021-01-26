// 1. Functions
// 2. Buttons
// 3. Write to HTML


// 1. Functions
// Functions are basically a list of things to do
// Functions are resuable!!! so you don't copy paste million times

// Declaring Functions

// camel function: start with lower case and then Uppercase. It's a standard oh!
function stanleyHuangIsAStudent() {
    document.write("Hi human!");
    document.write("Hi human!");
    document.write("Hi human!");
}

function sayHi(){
    let yourName = prompt("What's your name?");
    document.write(`Hellow there, ${yourName}.`);
}

// Calling Functions

stanleyHuangIsAStudent();

// 2. Buttons: Useful for calling functions in our HTML
// Buttons let you call functions when cliked using "oneclick"
         //<button onclick="sayHi()"> Hi </button>; THis one is HTML

//3. Writing to HTML
// You can write inside specific HTML elements

function hello() {
    document.getElementById("d2").innerHTML = "asdfasfsdasdfsd";
}

//getElementById
document.getElementById("d2").innerHTML = "Hello";

//querySelector: Useful because it can select classes OR IDs
// However, you msut use a .(class) or #(Id) to indicate what you are selecting
document.querySelector("#d3").innerHTML = "bye";

