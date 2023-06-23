import React from 'react'
import { Outlet } from 'react-router-dom'


export default function User() {
  return (
    <div>
      {/* Use to render child route's element, if there is one. */}
      <Outlet /> 
    </div>
  )
}
