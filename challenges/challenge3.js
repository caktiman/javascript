/*

You will create an ice hockey scoreboard.
You can add and remove goals.
You can control the current period (there are 3 periods in Hockey)

Lastly, you can add a player name to the penalty list.
Create an area where you can add and remove players name from a penalty area.

1. You will need variables to store the points
2. When a user clicks on the add button, you will need to add to the variable, and then display it in HTML
3. When a user clicks the subtract button, you will need to subtract from the variable, and then display it in HTML
4. Use CSS Flexbox or Grids to build your scoreboard layout
5. You will need a button to clear the penalty list
6. A reset score button should also be included that clears your entire scoreboard.
7. The score cannot be less than 0
8. The period can only be 1, 2, or 3 (starting from 1)

GOOD LUCK ✌🏒

*/

var hscore = 0;
var gscore = 0;
var pscore = 0;




// document.querySelector(".a").innerHTML = hscore;

function homeplus() { 
    console.log('+1')
    hscore++;
    document.querySelector(".a1").innerHTML = hscore;
}

function homeminus() {
    if (hscore === 0){

    }else{
    hscore--;
    document.querySelector(".a1").innerHTML = hscore;
    }
    
}

function guestplus() { 
    gscore++;
    document.querySelector(".c1").innerHTML = gscore;
}

function guestminus() {
    if (gscore === 0){
        
        
    } else {
        gscore--;
        document.querySelector(".c1").innerHTML = gscore;
    }
}

function periodplus() { 
    if(pscore === 3){
        
    }else{
        pscore++;
        document.querySelector(".periodNumber").innerHTML = pscore;
    }
    
}

function periodminus() {
    
    if(pscore === 0){
    }else{
        pscore--;
        document.querySelector(".periodNumber").innerHTML = pscore;
    }
  
}

function leftPenaltyPlus(){
    let leftname = prompt("Who?");
    document.querySelector(".b1").innerHTML = leftname;
}

function leftPenaltyMinus(){
    document.querySelector(".b1").innerHTML = "";
}

function rightPenaltyPlus(){
    let rightname = prompt("Who?");
    document.querySelector(".d1").innerHTML = rightname; 
}

function rightPenaltyMinus(){
    document.querySelector(".d1").innerHTML = "";
}

function resetnum(){
    var hscore = 0;
    var gscore = 0;
    var pscore = 0;
    var leftname = "None";
    var rightname = "None";
    document.querySelector(".a1").innerHTML = hscore;
    document.querySelector(".c1").innerHTML = gscore;
    document.querySelector(".periodNumber").innerHTML = pscore;
    document.querySelector(".b1").innerHTML = leftname;
    document.querySelector(".d1").innerHTML = rightname; 
}




//Don't do this because it won't be repeated
// if (gscore < 0){
//     gscore++;
//     document.querySelector(".c").innerHTML = gscore;
// }
