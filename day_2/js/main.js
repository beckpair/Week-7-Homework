// Exercise 1 //
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for (let i = 0; i < Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])){
        Object.values(person3)[i].forEach(element => console.log(element))
    } else {
        console.log(Object.values(person3)[i])
    }
}


// Exercise 2 //

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }

    printInfo = () => {
        return `This person's name is ${this.name} and they are ${this.age}.`

    }

    addAge = ( () => {
        // counter = this.age; //this our private variable
        // console.log('Hit')
        return () => {return this.age++}
    })()

}

let gideon = new Person('Gideon', '19')
let camilla = new Person('Camilla','20')
console.log(gideon.printInfo())
console.log(gideon.addAge())
console.log(gideon.addAge())
console.log(gideon.addAge())
console.log(gideon.addAge())

// Exercise 3 //

const strLength = (str) => {
    return new Promise( (resolve,reject) => {
        if(str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

strLength('supercalifragilisticexpialidocious')
.then( (result) => {
    console.log(`Big Word`)
})
.catch( (error) => {
    console.log(`Small Word`)
})