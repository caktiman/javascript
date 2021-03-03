//For loop 

var i = 0
//1. This for loop will do something 5x
for (i=0; i<5; i++){
    document.write('Hi')
}

//2. THis loop shows the value of i ) which is just our counter)
for (i=10; i>5; i--){
    document.write(i)
}

//3. For loops INSIDE for loops 
for ( i=0; i<3; i++){    //Repeat 3 times
    for (j=0;j<2;j++){   
        document.write('b')  //Repeat 2 times So the thrid time will be "a" 
    }
    document.write('a')
}
//bbabbabba 