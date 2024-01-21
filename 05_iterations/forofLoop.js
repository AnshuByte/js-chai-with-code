// for of 
//array specific loop

//[{},{}] //array of obj

const arr = [1,2,3,5,4,5,6]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

for (const num of arr) {
    console.log(num);
    
}

const greeting = "Hello World"
for (const a of greeting) {
    console.log(`Each char is ${a}`);
}


//maps

const map = new Map()

map.set('IN',"India")
map.set('Nep',"Nepal")
map.set('fr',"France")
map.set('IN',"India") //map removes duplicate values

console.log(map);

for (const [key,value] of map) {
    console.log(`${key} :- ${value}` );
    // console.log(value);

}

const myObj ={
    'game' : 'nfs',
    'game1' : 'spiderman',
}
// for (const iterator of myObj) {
//     console.log(iterator);
// }

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    kt : "Kotlin",
    swift : " Swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}` );

}