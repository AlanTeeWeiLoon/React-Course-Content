import React, { useState } from "react"

export default function UseState_Demo() {
  const [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1) // set new "count" state
  }

  const handleMinus = () => {
    setCount(count - 1) // set new "count" state
  }

  const handleByFive = () => {

    // not work because of have to maintain the previous state

    // for (let i = 0; i < 5; i++) {
    //   console.log(count);
    //   setCount(count + 1);
    // } 


    // use Arrow Function to resolve above issue

    for (let i = 0; i < 5; i++) {
      setCount((x) => x + 1)
    }
  }

  return (
    <div>
      <button onClick={handlePlus}>+</button>

      {/* display current count value in state */}
      {/* will always re-render when state count be update */}
      {count} 

      <button onClick={handleMinus}>-</button>
      <br />
      <br />
      <button onClick={handleByFive}>Increase the Value by 5</button>
    </div>
  )
}
