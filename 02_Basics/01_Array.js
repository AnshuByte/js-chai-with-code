// // const myArr = [1,2,3,4,5,true,"Anshu"]
// const myArr = [1,2,3,4,5]
// // const myHeros =["Anshu","Ansh"]
// // console.log(myArr[3]);
// // //sallow copy: share the same reference points

// // //Array Methods
// // myArr.push(8)
// // myArr.push(9)
// // myArr.pop()
// // myArr.pop()
// // myArr.unshift(10) //it shifts all the element to take the index 0 place so it in not suggestable it occur load to the computer
// // myArr.shift() //remove from the first
// // console.log(myArr.includes(2));
// // console.log(myArr.indexOf(4));

// // const newArr = myArr.join()
// // console.log(myArr);
// // console.log(newArr);


// //slice,splice

// console.log("A",myArr);
// const myn1 =myArr.slice(1,3) // it takes slice and shows output .org arry is not effected. (1,3) means index[1] - inndex [2] will be printed
// console.log(myn1);

// console.log("B",myArr);

// const myn2 =myArr.splice(1,3) //it manuculates and delete the data from the array permanently . (1,3) means index[1] - inndex [3] will be printed
// console.log(myn2);
// console.log("c",myArr);


const heros = ["thor","ironman","spiderman"]
const dc =["superman","flash","batman"]

heros.push(dc)

console.log(heros); //this will print array inside array.[heros,[dc]]

//to acess the array inside array value 
console.log(heros[3][1]); //prints flash
//concat returns new array
heros.concat(dc)

console.log(heros); //also nest into array into array

const allHeros = heros.concat(dc)
console.log(allHeros); //this will merge two array

//spread
const All_new_heros = [...heros,...dc]//this is way to merge arrays
console.log(All_new_heros);

const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usableAnotherArray = anotherArray.flat(Infinity)//this will solve the arry to a usab;e format
console.log(usableAnotherArray); 


console.log(Array.isArray("Anshu"));//false
console.log(Array.from("Anshu"));//converts to array
console.log(Array.from({name :"anshu"})); //returns [] empty array

let score1=2
let score2=3
let score3=22
let score4=23

console.log(Array.of(score1,score2,score3,score4)); //converts the diffrent elements to array


