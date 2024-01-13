// Stack (primitive type eg int)  
// Heap (Non- Primitive type)

let myName = "AnshuGupta"

let nickName = myName

nickName = "Anshu"

// a value is copied 
console.log(myName);
console.log(nickName);

// it reference to same 
let userOne = {
    email : "Anshu@gmail.com",
    class : "upper"
}

let usertwo = userOne

usertwo.email = "Ans@gmail.comm"

console.log(userOne.email)
