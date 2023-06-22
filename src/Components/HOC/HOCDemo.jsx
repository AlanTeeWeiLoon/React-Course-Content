import React, { useState } from "react";

function HOCDemo(OriginalComponent) {

  function NewComponent(props) {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
      setCount((prev) => prev + 1)
    }

    return (
      <OriginalComponent
        {...props}
        count={count}
        incrementCount={incrementCount}
      />
    )
  }

  return NewComponent
}

export default HOCDemo
