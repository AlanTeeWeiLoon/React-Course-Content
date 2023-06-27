// Emerging JavaScript

// Rest and Spread Operators

// Rest Operator is used to pack the values
// Spread Operator is used to unpack the values

function sum(a, b, c, d) {
  let res = a + b + c + d
  console.log(res)
}

sum(1, 2, 3, 4) // 10
sum(1, 2, 3, 4, 5, 6, 7) // Output will be 10 -> 5, 6, 7 will not be get by sum() function because only receive (a, b, c, d) these 4 argurments

// Spread Operator
let numbers = [1, 2, 3, 4]
sum(numbers) //  Output will be 1,2,3,4undefinedundefinedundefined -> (a) will receive [1, 2, 3, 4], then (b, c, d) will be undefined
sum(...numbers) // 10 -> ... syntax to unpack numbers array

// Rest Operator
function sum1(...values) { // ... syntax to pack the argurments pass in

  let total = 0
  values.map(x => (total += x))

  console.log(total);
  console.log(values);
}

sum1(1, 2, 3, 4) // 10 // [ 1, 2, 3, 4 ]
sum1(1, 2, 3, 4, 5 ,6, 7) // 28 // [ 1, 2, 3, 4, 5, 6, 7]
