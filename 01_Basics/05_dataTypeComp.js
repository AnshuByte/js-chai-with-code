console.log(2 > 1); //true
console.log(2>=2); //true


// console.log( "2" > 1); //true
// console.log("02" > 1); // true

// Avoide these type of commparisions

// console.log(null < 0); //false
// console.log(null == 0); //false
// console.log(null > 0); //false
// console.log(null >= 0); //true  
// /*the reason that an equality checkk == and comparisions works diffrently
// comparision convert null to number treeating it as 0 . Thats why (4) null>=0 is true and null>0 is false*/

// console.log(undefined < 0); //false
// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined >= 0); //false 

// Avoide these types of Comparisions *******


// ===
console.log("2" == 3); //false
console.log("2" === 2); //false (=== does not convert the datatype to integer)
console.log("2" == 2); //true