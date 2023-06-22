import React from "react";
import HOCDemo from "./HOCDemo";

function ClickCounter(props) {
  return (
    <div className="container m-5">
      <h3>{props.info}</h3>
      Count is - {props.count}
      <button className="btn btn-primary mx-1" onClick={props.incrementCount}>
        Click me
      </button>
    </div>
  )
}
export default HOCDemo(ClickCounter);
