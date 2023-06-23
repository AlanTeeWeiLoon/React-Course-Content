import React, { useRef } from "react";

export default function UncontrolledComponent() {

  {
    /* 
        Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM. 
        So in order to access any value that has been entered we take help of refs
    */
  }

  const ref = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Uncontrolled Compoenet - Your Name is : ${ref.current.value}`)
  }

  return (
    <div className="container mt-2">
      <h1>Uncontrolled Component</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <label> Name : </label>

        {/* Use ref to get the user input value and do handleSubmit action */}
        <input type="text" name="name" className="form-control" ref={ref} /> 
        <button className="btn btn-primary btn-lg m-2">Submit</button>
      </form>
    </div>
  )
}
