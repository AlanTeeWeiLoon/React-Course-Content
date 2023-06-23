import React, { useReducer } from "react";

export default function UseReducer_Demo() {

  const initialState = 0
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "INCREMENT5":
        return state + 5;
      case "DECREMENT5":
        return state - 5;

      default:
        return state;
    }
  }

  // const [variable/state, dispatch] = useReducer(reducer, initialArg, init);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <button
        className="btn btn-warning btn-lg m-2"
        onClick={() => dispatch({type: 'INCREMENT'})}
      >
        PLUS
      </button>
      {count}
      <button
        className="btn btn-success btn-lg m-2"
        onClick={() => dispatch({type: 'DECREMENT'})}
      >
        MINUS
      </button>
      <br />
      <button
        className="btn btn-warning btn-lg m-2"
        onClick={() => dispatch({type: 'INCREMENT5'})}
      >
        Increase By 5
      </button>
      {count}
      <button
        className="btn btn-success btn-lg m-2"
        onClick={() => dispatch({type: 'DECREMENT5'})}
      >
        Decrease By 5
      </button>
    </div>
  )
}
