import React, { useEffect, useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef()
  const loginRef = useRef()

  useEffect(() => {
    inputRef.current.focus() // input field will focus when first render this component
    // loginRef.current.focus() // login button will focus when first render this component
  }, [])

  const clicked = () => {
    console.log("Login Clicked ")
  };

  return (
    <div className="container mt-5">

      {/* use ref attribute with useRef */}
      <input type="text" placeholder="Enter your name here" ref={inputRef} />
      <br />
      <br />
      <button className="btn btn-warning " ref={loginRef} onClick={clicked}>
        LOGIN
      </button>
    </div>
  );
}
