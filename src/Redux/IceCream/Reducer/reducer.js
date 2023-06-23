import * as CakeActionType from "../ActionType/actiontype";

const initialQty = {
  numberOfIceCreams: 333,
}

const CakeReducer = (state = initialQty, action) => {
  switch (action.type) {
    case CakeActionType.BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payLoad,
      }

    case CakeActionType.SELL_ICECREAM: {
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payLoad,
      }
    }

    default:
      return state
  }
}

export default CakeReducer
