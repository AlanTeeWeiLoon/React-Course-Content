import * as actiontype from "../ActionType/actiontype";

export const buyIceCream = (amt) => {
  return {
    type: actiontype.BUY_ICECREAM,
    payLoad: amt,
  }
}

export const sellIceCream = (amt) => {
  return {
    type: actiontype.SELL_ICECREAM,
    payLoad: amt,
  }
}
