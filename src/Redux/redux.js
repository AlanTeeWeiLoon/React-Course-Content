// Import createStore from redux
const redux = require("redux")
const createStore = redux.createStore;

// Action Type
const BUY_CAKE = "BUY_CAKE"
const SELL_CAKE = "SELL_CAKE"
const BUY_CANDLE = "BUY_CANDLE"

// Action
const buyCake = (amt) => {
  return {
    type: BUY_CAKE,
    payLoad: amt,
  }
}

const sellCake = (amt) => {
  return {
    type: SELL_CAKE,
    payLoad: amt,
  }
}

const buyCandle = (amt) => {
  return {
    type: BUY_CANDLE,
    payLoad: amt,
  }
}

// Initial State
const initialState = {
  numberOfCakes: 20,
  numberOfCandles: 30,
}

// Reducer 
// reducer = (state, action)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payLoad,
      }

    case SELL_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payLoad,
      }

    case BUY_CANDLE:
      return {
        ...state,
        numberOfCandles: state.numberOfCandles + action.payLoad,
      }

    default:
      return state
  }
};

const store = createStore(reducer)

console.log("Initial State : ", store.getState()) // Output -> Initial State :  { numberOfCakes: 20, numberOfCandles: 30 }

store.subscribe(() => console.log("Updated State : ", store.getState())) // subscribe() will execute when any of the action been dispatch


store.dispatch(buyCake(3)) // Will return "{ type: BUY_CAKE, payLoad: 3 } to reducer when buyCake() called
// Output -> Updated State :  { numberOfCakes: 17, numberOfCandles: 30 }

store.dispatch(sellCake(2)) // Will return "{ type: SELL_CAKE, payLoad: 2 } to reducer when sellCake() called
// Output -> Updated State :  { numberOfCakes: 19, numberOfCandles: 30 }

store.dispatch(buyCandle(5)) // Will return "{ type: BUY_CANDLE, payLoad: 5 } to reducer when buyCandle() called
// Output -> Updated State :  { numberOfCakes: 19, numberOfCandles: 25 }
