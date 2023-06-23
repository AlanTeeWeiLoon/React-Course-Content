import React from 'react'
import ComponentC from './ComponentC'


export default function ComponentB({name, gender}) { // receiveing props from ComponentA
  return (
    <div>
        {/* Pass props to ComponentC */}
      <ComponentC name={name} gender={gender}/>
    </div>
  )
}
