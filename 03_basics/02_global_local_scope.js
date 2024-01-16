
{} // scope

var c=300
let a = 200
const b = 300
if(true){
    let a = 10
    //const b =20
    var c = 30 //it voilates the rule of local and global scope.as it shoud not wok  outside of scope
   // console.log("inner : ",a);
}

//console.log(a); //returns 200
// console.log(b);
//console.log(c); //returns 30


//global scope  are diffrent in console and node


/* scope level and mini hoisting */



function one (){
    const username = "Anshu"
    function two (){
        const web =  "youtube "
        console.log(username);
    }
    //console.log(web);
    two()
}
//one()

if (true) {
    const user = "ANshu"
    if (user === "ANshu") {
        const surname =" Gupta"
       // console.log(user  + surname);
        
    }
    //console.log(surname);
    
}
//console.log(user); //cannot acess as global scope not defined


// *********************intersting **************

console.log(addone(5));
function addone(num) {
    return num +1
    
}

//console.log(addtwo(5));//will not due to hoisting
const addtwo = function(num){
    return num + 2

}
console.log(addtwo(5));


