
// Emerging JavaScript
// 2.1 Declaring Variable in ES6


// Variables and their scope
// Var, let and const
// var have global scope and can be reassignable
// Let and const have block scope and const can not be changed

//Outside
var x = 10
let y = 20
const z = 30

console.log(x) // 10
console.log(y) // 20
console.log(z) // 30

if (true) {

    //block scope
    console.log(x) // 10
    //console.log(y) // ReferenceError - block scope (let)
    //console.log(z) // ReferenceError - block scope (const)

    //Reassign value
    x = 1000 // can be reassignable (var)
    y = 2000 // can be reassignable (let)
    //z = 3000 // TypeError - cannot reassign

    console.log(x) // 1000
    console.log(y) // 2000
    
    //Inside
    var xx = 100
    let yy = 200
    const zz = 300

    console.log(xx) // 100
    console.log(yy) // 200
    console.log(zz) // 300
}

console.log(x) // 1000 - value be reassigned inside the block (var)
console.log(y) // 2000 - value be reassigned inside the block (let)
console.log(z) // 30

console.log(xx) // 100
//console.log(yy) // ReferenceError - block scope (let)
//console.log(zz) // ReferenceError - block scope (const)



