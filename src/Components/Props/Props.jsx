import React from 'react';

export default function Props(props) { // receiving props

  // - Comment above when uncomment this
  // export default function Greet({name, age}) {  // Props destructuring
    
  const {name, age} = props // Props destructuring

  return (
    <div>
      {/* Getting props (name and age) with value  from Index component */}

      {/* Normal Props */}
      Hey, Good Morning ! {props.name} and I am {props.age} years old.

      {/* Props Destructuring */}
      Hey, Good Morning ! {name} and I am {age} years old

    </div>

    
  )
}

// Props : {name: "John", age: "23"}