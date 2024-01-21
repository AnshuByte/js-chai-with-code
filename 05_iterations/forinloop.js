const myObject = {
    js : 'javascript',
    cpp : 'c++',
    kt : "Kotlin",
    swift : " Swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}` );

}

const prog = ["js","rb","py"]

for (const key in prog) {
    // console.log(key); //returns index values
    console.log(prog[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('Nep',"Nepal")
map.set('fr',"France")
map.set('IN',"India") //map removes duplicate values


for (const key in map) {
    console.log(key);
    // doesn't print anything as maps are not itteratable

}