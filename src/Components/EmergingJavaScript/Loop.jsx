// Emerging JavaScript


// Loops : to iterate over an array or an object
// For , while, do while loops
// intitalistaion , stoping condition, updation

let names = ["Peter", "John", "Parker", "Rose"]

// For Loops
for (let i = 0; i < 4; i++) {
  // (intitalistaion, stoping condition, updation)
  console.log("1. ", names[i]) // Peter John Parker Rose
}

// For of Loops
for (let name of names) {
  console.log("2. ", name) // Peter John Parker Rose
}

// While Loops
let i = 0
while (i < names.length) {
  console.log("3. ", names[i]) // Peter John Parker Rose
  i++
}

// Do While Loops
let j = 0
do {
  console.log("4. ", names[j]) // Peter John Parker Rose
  j++
} while (j < names.length)


// Iteratte over Array of Objects
let students = [
  { id: 1, name: "Peter" },
  { id: 2, name: "John" },
  { id: 3, name: "Rose" },
]

for (let std of students) {
  console.log("5. ", std.id, std.name)
}
