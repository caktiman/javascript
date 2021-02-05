/*
Create a simple calculator that can add, subtract, multiply, and divide two numbers

1. Have two inputs for the user to put in 2 numbers
2. When an operation (+, -, *, /) is pushed, the 2 numbers are stored in variables
3. Perform addition, subtraction, multiplication, and division on the numbers
4. Display the sum, difference, product, and quotient of the two numbers
    -  You will need a display area on your page

CHALLENGE:
- When dividing, display the answer as a whole number quotient with remainder (no decimals)

HINT: you will need Modulus %

*/

function plus(){
    let input1 = document.querySelector("#input1").value;
    let input2 = document.querySelector("#input2").value;
    input1 = parseInt(input1);
    input2 = parseInt(input2);
    final = input1 + input2;
    document.querySelector(".answer").innerHTML = final;
}

function minus(){
    let input1 = document.querySelector("#input1").value;
    let input2 = document.querySelector("#input2").value;
    input1 = parseInt(input1);
    input2 = parseInt(input2);
    final = input1 - input2;
    document.querySelector(".answer").innerHTML = final;
}

function times(){
    let input1 = document.querySelector("#input1").value;
    let input2 = document.querySelector("#input2").value;
    input1 = parseInt(input1);
    input2 = parseInt(input2);
    final = input1 * input2;
    document.querySelector(".answer").innerHTML = final;
}

function divide(){
    let input1 = document.querySelector("#input1").value;
    let input2 = document.querySelector("#input2").value;
    input1 = parseInt(input1);
    input2 = parseInt(input2);
    final = input1 % input2;
    final2 = input1 / input2;
    final2 = Math.trunc(final2);
    
    document.querySelector(".answer").innerHTML = final2 +" Remainder "+ final;
}




