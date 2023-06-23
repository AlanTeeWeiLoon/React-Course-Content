import React, { useCallback, useState, useMemo, useEffect } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export default function UseCallBack_Demo() {
  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)

  const sampleA = () => {
    // do something
  }

  // use useCallBack Hook along with memo() in ComponentB to prevent component re-render 
  const sampleB = useCallback(() => {
    // do something
  }, [add])

  return (
    <div className="container">
      <br />
      <button
        className="btn btn-primary btn-lg m-2"
        onClick={() => setAdd(add + 1)}
      >
        Add
      </button>
      : {add}

      {/* will render ComponentA while any of the button clicked in this component */}
      <ComponentA sample={sampleA} />

      {/* will render ComponentB only when "Add" button clicked because of add value change */}
      <ComponentB sample={sampleB} />


      <button
        className="btn btn-warning btn-lg m-2"
        onClick={() => setMinus(minus - 1)}
      >
        Minus
      </button>
      : {minus}
    </div>
  )
}
