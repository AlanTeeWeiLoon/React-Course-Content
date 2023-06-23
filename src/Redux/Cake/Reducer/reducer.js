import * as CakeActionType from "../ActionType/actiontype";

const initialQty = {
  numberOfCakes: 333,
  numberOfCandles: 0,
}

const CakeReducer = (state = initialQty, action) => {
  switch (action.type) {
    case CakeActionType.BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payLoad,
      }

    case CakeActionType.SELL_CAKE: {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payLoad,
      }
    }
    case CakeActionType.BUY_CANDLE:
      return {
        ...state,
        numberOfCandles: state.numberOfCandles + action.payLoad,
      }

    default:
      return state;
  }
}

export default CakeReducer
