// 1.HTMl text input
// 2. Get input values
// 3. Converting STRING data types to INT data types

//YOu can get html elemetns usign qurty Drlrvyot
//The .value method allow you to grab what is inside the elemtn
//Don't forget to save the value in a variable if you want to use it!

let drink = document.querySelector("#drink").value;




// 1. Create a Button
// 2.when the button is pushed, you store an input value
// 3. display the input value is a separate div

function storeIt(){
    let drink = document.querySelector("#drink").value;
    document.querySelector("#get").innerHTML = drink;
}



//Type conversion
// Converting string to int
var x ="3"

var parsedX = parseInt(x)
var x = parseInt(x)
//Change data type to INT 

//it changes "3" to 3
document.write(x);
document write(parsedX)


