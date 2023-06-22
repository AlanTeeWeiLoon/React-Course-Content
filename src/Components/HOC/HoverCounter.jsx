import React from "react";
import HOCDemo from "./HOCDemo";

function HoverCounter(props) {
  return (
    <div className="conatiner mx-5">
      <h3>{props.info}</h3>
      Count is - {props.count}
      <button
        className="btn btn-primary mx-1"
        onMouseOver={props.incrementCount}
      >
        Hover Me
      </button>
    </div>
  )
}

export default HOCDemo(HoverCounter);
