import React, { useMemo, useState } from "react";

export default function UseMemoDemo() {

  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)
  const [useMemo_Add, setUseMemo_Add] = useState(0)
  const [useMemo_Minus, setUseMemo_Minus] = useState(100)

  {/* multiplyByUseMemo() will only render while "Add by UseMemo" button clicked */}
  const mul = useMemo(
    function multiplyByUseMemo() {
      console.log("Function using UseMemo is rendering")
      return useMemo_Add * 10
    },
    [useMemo_Add]
  )

  {/* multiply() will always render while any of the button clicked */}
  function multiply() {
    console.log("Function without using UseMemo is rendering")
    return add * 10
  }

  return (
    <div className="container">
      <h1> Without UseMemo </h1>
      Multiplied Value :{multiply()}

      <br />

      {/* re-render multiply() */}
      <button
        className="btn btn-primary btn-lg m-2"
        onClick={() => setAdd(add + 1)}
      >
        Add
      </button>
      : {add}

      {/* re-render multiply() although there is not minus state using in the function */}
      <button
        className="btn btn-warning btn-lg m-2"
        onClick={() => setMinus(minus - 1)}
      >
        Minus
      </button>
      : {minus}

      <br />

      {/* UseMemo */}
      <h1> With UseMemo </h1>
      Multiplied Value :{mul}

      <br />

      {/* render multiplyByUseMemo() becasue of useMemo_Add change  */}
      <button
        className="btn btn-primary btn-lg m-2"
        onClick={() => setUseMemo_Add(useMemo_Add + 1)}
      >
        Add by UseMemo
      </button>
      : {useMemo_Add}

      {/* Will not render multiplyByUseMemo() when click on "Minus by UseMemo" button */}
      <button
        className="btn btn-warning btn-lg m-2"
        onClick={() => setUseMemo_Minus(useMemo_Minus - 1)}
      >
        Minus by UseMemo
      </button>
      : {useMemo_Minus}

    </div>
  )
}
