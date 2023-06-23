import * as actiontype from "../ActionType/actiontype";

export const buyCake = (amt) => {
  return {
    type: actiontype.BUY_CAKE,
    payLoad: amt,
  }
}

export const sellCake = (amt) => {
  return {
    type: actiontype.SELL_CAKE,
    payLoad: amt,
  }
}

export const buyCandle = (amt) => {
  return {
    type: actiontype.BUY_CANDLE,
    payLoad: amt,
  }
}
