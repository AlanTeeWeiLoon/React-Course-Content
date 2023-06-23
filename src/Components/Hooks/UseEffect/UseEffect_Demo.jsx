import React, { useEffect, useState } from "react";

export default function UseEffect_Demo() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const setCount = () => {
    setCount1(count1 + 1)
  };

  // Execute after every render
  useEffect(() => {
    console.log("Execute after every render")
  }) // empty argurment

  // Execute only at the starting of app
  useEffect(() => {
    console.log("Execute only at the starting of app")
  }, []) // empty array as argurment

  //Execute only when the count1 will change
  useEffect(() => {
    console.log("count1", count1)
  }, [count1]) // dependency array as argurment

  return (
    <div className="container mt-5">
      <button onClick={setCount}>Click me {count1}</button>
      <br />
      <button onClick={() => setCount2((c) => c + 1)}>Click me {count2}</button>
    </div>
  );
}
