let index = 0
while (index<=10) {
    console.log(`value is ${index}`);
    index++
}

//while
let myArray =['a','b','c','d']

let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++
}


//do while
let score = 1
do{
    console.log("lol");
    score++
}while (score<=10) 

// console.log(0018); gives 18 

/*when you use 012, 017, 04, it reprent octal number system. and in octal number system 
there are digits like 0,1,2,3,4,5,6,7 exist. 8 and 9 doesn't exist in octal so all the numbers
that have digits from 0 to 7 are valid octal number and if a number has a digit 8 or 9 it is not 
considered as a octal number. So 018 is actually treated as a decimal number where as 017, 015 
are converted to it's decimal number*/

// console.log(017); gives 15
// console.log(0117);