const user ={
    username : "Anshu",
    price : 99,
    welcomemessage : function(){
            console.log(`${this.username} ,welcomme`);// this refers to current context
            console.log(this);
    }

}//"this" only works in object
// user.welcomemessage() //prints Anshu Welcome
// user.username = "Rahul"
// user.welcomemessage() //prints Rahul welcome
 
 //console.log(this); //prints {} // in console gives window object (eg : click ,alert,form)

//  function chai (){
//     const user = "Anshu"
//     //console.log(this.user); //prints undefined
//  }

//  const chai =function (){
//     const user = "Anshu"
//     console.log(this.user); //prints undefined
//  }


//*****arrow function */
 const chai = () =>{
    const user = "Anshu"
    console.log(this.user); //prints undefined
 }

 //chai()

//  const addtwo = (num1,num2) =>{
//     return num1 + num2
//  }

 const  addTwoNumbers = (num1,num2) =>num1 + num2
 const  addTwoNumbers2 = (num1,num2) => (num1 + num2)
 const  addTwoNumbers3 = (num1,num2) => ({username:"Anshu"})


 console.log(addTwoNumbers(2,4));
 console.log(addTwoNumbers3(2,4));








 