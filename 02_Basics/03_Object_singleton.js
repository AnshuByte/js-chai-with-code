//const tinderUser = new Object() //singleton object
const tinderUser ={} // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "anshu"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email : "anshu@gmail.com",
    fullname : {
        userfullname : {
                firstname : "anshu",
                lastname  : "Gupta"
        } 
    }
}
//console.log(regularUser.fullname?.userfullname);

const  obj1 = { 1 : "a", 2: "b"}
const  obj2= { 3 : "a", 4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 =  Object.assign(obj1,obj2)
//const obj3 =  Object.assign({},obj1,obj2) //merge all to target object //{} used to make it as src //if not used obj1 will act as src

const obj3 = {...obj1,...obj2} //spread .merge multiple array
// console.log(obj3);
// console.log(obj1);


const user = [  //array of object
    {
        id :1,
        email : "anshu@gmail.com"
    },
    {
        id :1,
        email : "anshu@gmail.com"
    },
    {
        id :1,
        email : "anshu@gmail.com"
    },
    {
        id :1,
        email : "anshu@gmail.com"
    },
    {
        id :1,
        email : "anshu@gmail.com"
    }
]

console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));





