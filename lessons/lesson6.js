// 1. Array method for Each()
// 2. storing elemts in variables
// 3. dynamic HTML (writing HTMl with JS)

//for Each()
// It allows us  to go through each elelment of an array and run a function for each one 
// it also has access to the elemets

const fruit = [`apple`, `banana`, `orange`, `pine`]

fruit.forEach(sayFruit);

function sayFruit(element){
    console.log(element)
    
}

// one-line ver. of the top 2 chucks of code
fruit.forEach(function (element) {console.log(element)})


function sayHi{
    console.log(`hi)`)
}
 
//2. Storing elements in variables

//THhs shit is long, right? Especially if you need to copy& paste this shit everytime.
document.querySelector(".display").innerHTML = x+y
document.querySelector(".display").innerHTML = x-y

//This shortens the need to type document. blah blah blah
const display = document.querySelector(".display")
display.innerHTML = "hi"

// 3. Dynamic HTML
// Using Js to create HTML elemets
var movie ="https://youtube.com"
display.innerHTML = `<img src="${movie}">`
