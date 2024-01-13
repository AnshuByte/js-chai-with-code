// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let MyCreateDate = new Date(2023,0,23)
//let myCreateDate = new Date(2023,0,23, 5, 3)
//let myCreateDate = new Date("2023-01-13")
let myCreateDate = new Date("01-14-2023")
//console.log(myCreateDate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreateDate.getTime());//give values in mili sec
console.log(Math.floor(Date.now()/1000)); //in sec


let newDate = new Date()

console.log(newDate.getMonth() + 1);

console.log(`${newDate.getMonth()}`);

newDate.toLocaleString('default',{
    weekday : "long",
})

console.log(newDate.toLocaleString('default',{
    weekday : "long",
}));