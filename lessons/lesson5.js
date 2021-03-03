/* 

1. FUnction argumetns and parameters
2. Arrays

*/

//1. FUnction with argument and parameters


// A PARAMETEPR is the data name for the function
// It describes the user you want to give you
function yee(person, age){
    document.write(`Hello ${person}, you are ${age} years old.`)
}


// An ARGUMENT is the data value that you give the function.
// This is the data you want to give the functions to use
yee("Jeff", "1")

//Create a fucntion the multuplies 2 nums together. 
//Make sure the fucntion takes in 2 arguments and then multiplies those numbers and then showed it on the screen.

function multiply(num1, num2){
    document.write(num1*num2)
}

multiply(2,3)

// Arrays 
// Vairbales that hold more than one piece of data
// data can be mixed data types

//Declare an array
var studnets = [`Stan`,`Tiger`,`???`]

//When calling an array lelemts, add the eleet's position in [], (remmeber cinpyters start counting from 0!)z
document.write(studnets[1])


let boysTraits = [`rtsts`,`dsfssd`,`sdfiskd`]

//to add something to an array, use push
boysTraits.push (`dsfsdfsdfsf`)

//unshift() addes to the FRONT of the array
boysTraits.unshift(`intellignet`)

//remove fom an array using pop()
//pop() removes teh last tiem in the array

boysTraits.pop()


