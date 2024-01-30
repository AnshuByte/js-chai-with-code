const accountId = 9800000
let accountName = "Anshu Gupta" // now let is only used instead of var 
var password ="Anshurauniyar" // not used nowadays (let is used insted of var because of {} confusion)
address = "jaipur" // should not be used . works but not to be used
let accountsdate
/*
prefer not to use var 
Because issue in block scope and functinal scope 
*/
console.log(accountName)
console.table([accountId, accountName, address, accountsdate])


// console.log(0018); gives 18 

/*when you use 012, 017, 04, it reprent octal number system. and in octal number system 
there are digits like 0,1,2,3,4,5,6,7 exist. 8 and 9 doesn't exist in octal so all the numbers
that have digits from 0 to 7 are valid octal number and if a number has a digit 8 or 9 it is not 
considered as a octal number. So 018 is actually treated as a decimal number where as 017, 015 
are converted to it's decimal number*/

// console.log(017); gives 15
// console.log(0117);