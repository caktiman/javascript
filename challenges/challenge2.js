// 1. Store you and your friend's mass and height in variables using prompts
// 2. Calculate both BMIs and store them in separate variables
// 3. Display you and your friends mass, height, and BMI on the screen
// 4. Using if else statements, write if you and your friend have a healthy BMI
// 5. Also write if you or your friend have a higher BMI
// 6. Using the chart below, write you and your friend's weight status

let myname = prompt("Your Name");
let height =prompt("Your height (m)");
let weight = prompt("Your weight (kg)");

let friendname =prompt("Friend's name")
let friendheight =prompt("Friend height (m)");
let friendweight = prompt("Friend weight (kg)");

var BMI = (weight/(height ** 2))
var friendBMI =(friendweight/(friendheight ** 2))

document.write(`Name: ${myname}.<br>`)
document.write(`My height: ${height}.<br>`);
document.write(`My weight: ${weight}.<br>`);
document.write(`My BMI: ${BMI}.<br><br>`);

document.write(`Friend's name: ${friendname}<br>`)
document.write(`Friend height: ${friendheight}.<br>`);
document.write(`Friend weight: ${friendweight}.<br>`);
document.write(`Friend BMI: ${friendBMI}.<br><br>`);

if (BMI > 25 && BMI < 30)
{
    document.write("You are overweight.<br>");
}

else if(BMI > 30) {
    document.write("You are obese<br>");
}

else if (BMI < 18.5){
    document.write("You are underweight<br>");
}

else{
    document.write("You are normal<br>");
}

if (friendBMI > 25 && friendBMI < 30)
{
    document.write("Your friend is overweight.");
}

else if(friendBMI > 30) {
    document.write("Your friend is obese");
}

else if (friendBMI < 18.5){
    document.write("Your friend is underweight");
}

else{
    document.write("Your friend is normal");
}





