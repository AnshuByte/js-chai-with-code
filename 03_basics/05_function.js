// //**Function
// function sayMyName (){
//     console.log("A");
//     console.log("n");
//     console.log("s");
//     console.log("h");
//     console.log("u");
// }

// // sayMyName //refrence
// // sayMyName() //execution

// // function addTwoNumbers(num1,num2){
// //     console.log(num1 + num2);
// // }

// function addTwoNumbers(num1,num2){
//    let result = num1+num2
//    console.log("Gupta");
//    return result
//    console.log("anshu"); //unreacheable
// }

// const Return = addTwoNumbers(2,"a")

//console.log("results : " ,Return);

function loginUaerMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("please enter username : ");
    //     return
    // }
    //same as above
    if(!username){
        console.log("please enter username : ");
        return
    }
    return `${username} just logged in`
    
}

console.log(loginUaerMessage("anshu"));
console.log(loginUaerMessage());//return undefined



function calculateCartPrice(val1,val2,...num1){ //...num1 //rest operator
    return num1

}

console.log(calculateCartPrice(22,222,2222));

const user ={
    username : "anshu",
    price : 1000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} amd price ${anyobject.price}`);
}

// handleObject(user) 
handleObject({
    username : "ram",
    price : 100
})

const myNewArray = [200,322,1223,222]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,322,1223,222]));