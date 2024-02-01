const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function(val){
//     console.log((val));
// } )


// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item,index,arr)=>{
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        langName : "JS",
        langFileName : "js"
    },
    {
        langName : "cpp",
        langFileName : "cpp"
    },
    {
        langName : "c",
        langFileName : "c"
    },
    {
        langName : "ruby",
        langFileName : "ruby"
    }
]

// myCoding.forEach( (item,index,arr)=>{
//     console.log(item.langName,index,arr);
// })


// const values = coding.forEach( (item)=>{
// console.log(item);
// } )//this will return undedined after the value iteration

// const values = coding.forEach( (item)=>{
//     //console.log(item);
//     return item
// } )//return undefined //foreach doesn't return any value
// console.log(values);

const myNums = [1,2,3,4,5,6,7,9,10]

// const newNums = myNums.filter( (num)=>(num > 4)
// ) returns arry <4
// const newNums = myNums.filter( (num)=>
// {
//    return num>4
// }
// ) // returns [] if no used return.use return keyworn when scope op is used
// console.log(newNums)

const newNums = []

myNums.forEach( (num)=> {
    if (num > 4 ){
        newNums.push(num)
    }
} )

console.log(newNums);