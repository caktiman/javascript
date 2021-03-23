/*
Welcome to 🐱‍🐉 Dino's Looping Challenge of Doom!
You will need to create 4 loops for this challenge

1. Create a loop that writes "I love homework" 5 times 
2. Create a loop that counts from 0 to 4 and writes the current number on the screen.
3. Create a loop that counts from 15 to 30 but only writes multiples of 3 on the screen
      - ex. 15, 18, 21, 24, 27, 30
4. Create a loop that will draw 4X4 square using ⬜. ONLY PRINT 1 ⬜ at a time. Your loops should do the rest. It should look like this:
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
document.write("⬜⬜⬜⬜") (X) <-- don't do this)
HINT: Loops can be nested inside another loop

5. Dino is a very neat and organized dinosaur. He likes to stack the bones (🦴) of his victims in a nice triangle shape. Create a stack that is 7 bones high.
- You will need to create a loop writes 1 🦴, and every successive line adds one more bone. It should look like this: 

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴
🦴🦴🦴🦴🦴 
🦴🦴🦴🦴🦴🦴
🦴🦴🦴🦴🦴🦴🦴

6. Create the same pile of bones as challenge 5, but this time, center them by adding a ~ in front so the shape is a pyramid 

~~~~~~🦴
~~~~~🦴🦴
~~~~🦴🦴🦴
~~~🦴🦴🦴🦴
~~🦴🦴🦴🦴🦴 
~🦴🦴🦴🦴🦴🦴
🦴🦴🦴🦴🦴🦴🦴

7. Create a loop that creates 5 stacks of bones, each with another row at the bottom

🦴

🦴
🦴🦴

🦴
🦴🦴
🦴🦴🦴

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴
🦴🦴🦴🦴🦴

GOOD LUCK 🤹‍♂️
*/


document.write("<br>")
document.write("<br>")

for (i=0; i<5; i++){
    document.write('I love homework ') 
}
document.write("<br>")
document.write("<br>")

for (i=0; i<5; i++){
    document.write(i) 
}
document.write("<br>")
document.write("<br>")

for (i=15; i<31; i++) {
    if(i % 3 === 0){
    document.write(` ${i}`) 
    }
}
document.write("<br>")
document.write("<br>")

for ( i=0; i<4; i++){    //Repeat 4 times
    for (j=0;j<4;j++){   
        document.write(`⬜`) //Repeat 4 times  
    }
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")

for ( i=0; i<1; i++){    //Repeat 7 times

    for (l=0;l<1;l++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")

    for (k=0; k<2; k++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")

    for (l=0; l<3; l++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")

    for (m=0;m<4;m++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")

    for (n=0; n<5; n++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")

    for (o=0; o<6; o++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")

    for (p=0; p<7; p++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")

for ( i=0; i<1; i++){    //Repeat 1 times

    for(q=0;q<6;q++){
        document.write(`~`) 
    }
   
    for (l=0;l<1;l++){   
        //you can also q variable loop here because it only loops once. The others? Meh. It will break the pyramid. Ex: ~~~bone~~~bone if you do that in the second layer.
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")

    for(r=0;r<5;r++){
        document.write(`~`) 
    }

    for (k=0; k<2; k++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")

    for(s=0;s<4;s++){
        document.write(`~`) 
    }

    for (l=0; l<3; l++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")

    for(t=0;t<3;t++){
        document.write(`~`) 
    }

    for (m=0;m<4;m++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")

    for(u=0;u<2;u++){
        document.write(`~`) 
    }

    for (n=0; n<5; n++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")

    for(v=0;v<1;v++){
        document.write(`~`) 
    }

    for (o=0; o<6; o++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")

    for (p=0; p<7; p++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
}
document.write("<br>")
document.write("<br>")



for ( i=0; i<1; i++){    //Repeat 7 times

    for (l=0;l<1;l++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")
    document.write("<br>")



    for (l=0;l<1;l++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")

    for (k=0; k<2; k++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
    document.write("<br>")



    
    for (l=0;l<1;l++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")

    for (k=0; k<2; k++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
    for (l=0; l<3; l++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
    document.write("<br>")
    

    for (l=0;l<1;l++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")

    for (k=0; k<2; k++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
    for (l=0; l<3; l++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
    for (m=0;m<4;m++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")
    document.write("<br>")



    for (l=0;l<1;l++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")

    for (k=0; k<2; k++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
    for (l=0; l<3; l++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")
    for (m=0;m<4;m++){   
        document.write(`🦴`) //Repeat 1 time  
    } 
    document.write("<br>")
    for (n=0; n<5; n++){
        document.write(`🦴`) //Repeat 2 times  
    }
    document.write("<br>")


document.write("<br>")
}
