const name = "anshu "
const repocount = 50
const t =3

//old fashion
//console.log(name + repocount + " value");


//new way (suggestable)
console.log(`Hello my name is ${name} and my repocount is ${repocount}`);


//it creates object and inside constructor is inserted with value
//it helps to invoke methods like charAt().....
const gameName = new String('Anshu-gupta')

console.log(gameName[0]);
// here we use diffrent methods in place of __proto__
console.log(gameName.__proto__);

//Eg.
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName); //orginal values doesn't changes.
console.log(gameName.charAt(t)); //throw error because 't' value is not defined.
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));
console.log( );

//substring
const newString = gameName.substring(0,4)
console.log(newString);

//we can use neg value in Slice() it start from reverse
const aanotherString = gameName.slice(-11,4)
const anotherString = gameName.slice(0,4)
console.log(aanotherString);
console.log(anotherString);

//trim() spaces from front and back
const newStringOne = "    Anshu gupta    "
console.log(newStringOne.trim());


const url = "https://anshugupta.com/anshu%20gupta"
console.log(url.replace('%20','-')); //replaces with the given values

console.log(url.includes('anshug')) // find if this in in the string and return true or false

console.log(gameName.split('-'));



 