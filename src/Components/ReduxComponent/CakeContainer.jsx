import React, { useState } from "react";
import {
  buyCake,
  sellCake,
  buyCandle,
} from "../../Redux/Cake/Action/action.js"; // import all cake action
import { useDispatch, useSelector } from "react-redux";

export default function CakeContainer() {
  const [cake, setCake] = useState(0)
  const [sold, setSold] = useState(0)
  const [candle, setCandle] = useState(0)

  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes) // useSelector Hook allow to get value from state directly
  const numberOfCandles = useSelector((state) => state.cake.numberOfCandles)
  const dispatch = useDispatch()
  
  return (
    <div className="container">
      <div className="col md-12">
        Number Of Cakes : {numberOfCakes}
        <div className="row">
          <div className="col md-6">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setCake(Number(e.target.value))}
            />
          </div>
          <div className="col md-6">
            <button
              className="btn btn-warning"
              onClick={() => dispatch(buyCake(cake))}
            >
              Buy Cake
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
              onClick={() => dispatch(sellCake(sold))}
            >
              Sell Cakes
            </button>
          </div>
        </div>
      </div>
      <div className="col md-12">
        Number Of Candles : {numberOfCandles}
        <div className="row">
          <div className="col md-6">
            <input
              type="number"
              className="form-control"
              onChange={(e) => setCandle(Number(e.target.value))}
            />
          </div>
          <div className="col md-6">
            <button
              className="btn btn-warning"
              onClick={() => dispatch(buyCandle(candle))}
            >
              Buy Candles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
