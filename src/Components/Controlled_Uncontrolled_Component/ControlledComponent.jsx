import React, { useState } from "react";

export default function ControlledComponent() {

  {
    /* 
        Controlled Components are those in which forms' data is handled by the component’s state. 
        It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. 
        A parent component manages its own state and passes the new value as props to the controlled component. 
    */
  }

  const [name, setName] = useState("Peter")
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Controlled Compoenet - Your Name is : ${name}`)
  }

  return (
    <div className="container mt-2">
      <h1>Controlled Component</h1>
      <form className="form-control" onSubmit={handleSubmit}>
        <label> Name : </label>

        {/* Use onChange() to set user's input value to state by setName(), and do handleSubmit action by current "name" state value*/}
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary btn-lg m-2">Submit</button>
      </form>
    </div>
  );
}
