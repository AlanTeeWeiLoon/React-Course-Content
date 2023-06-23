import React, { useState } from "react";
import {
  buyIceCream,
  sellIceCream,
} from "../../Redux/IceCream/Action/action.js";
import { useDispatch, useSelector } from "react-redux";

export default function IceCreamContainer() {
  const [icecream, setIceCream] = useState(0)
  const [sold, setSold] = useState(0)

  const numberOfIceCreams = useSelector(
    (state) => state.icecream.numberOfIceCreams
  )
  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="col md-12">
        Number Of Ice Creams : {numberOfIceCreams}
        <div className="row">
          <div className="col md-6">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setIceCream(Number(e.target.value))}
            />
          </div>
          <div className="col md-6">
            <button
              className="btn btn-warning"
              onClick={() => dispatch(buyIceCream(icecream))}
            >
              Buy Ice Cream
            </button>
          </div>
        </div>
        <div className="row my-1">
          <div className="col md-6">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setSold(Number(e.target.value))}
            />
          </div>
          <div className="col md-6">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(sellIceCream(sold))}
            >
              Sell Ice Cream
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
