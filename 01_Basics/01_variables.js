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
