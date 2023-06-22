import React from 'react';

export default function ObjectAsProps(props) {

  const { name, age, course } = props.obj

  return (
    <div>
      My name is {name} and I am {age} years old and studying {course}
    </div>
  )
}


// props = {
//     obj = {
//         name:'Peter',
//         age:23,
//         course:'React JS'
//     }
// }
