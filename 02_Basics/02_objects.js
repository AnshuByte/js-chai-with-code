// singlton //when made with constructors singelton is made
//Object.create  //this will make singleton


//object literals
const mySym = Symbol("key1")
const JsUser ={
    name : "Anshu",//name is key //"anshu" is value
    age :18,
    "full name" : "Anshu Gupta",
     email :"anshu@gmail.com",
    isLoggedIn : false,
    [mySym] : "mykey1",
    lastLogIn : ["Monday","Saturday"]
}

console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); //when space is used we use this to call the value
console.log(JsUser[mySym]); // []to fect dymbol ,not as string

JsUser.email = "anshurauniyar@gmail.com"
console.log(JsUser["email"]);
//Object.freeze(JsUser)

JsUser.email="ansh@gmail.comm" //freeze is used above so value will not change and also doesn't throw error 
console.log(JsUser["email"]);


//function

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());


//   

