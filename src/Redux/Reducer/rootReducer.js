import { combineReducers } from "redux";
import CakeReducer from "../Cake/Reducer/reducer.js";
import IceCreamReducer from "../IceCream/Reducer/reducer.js";

const rootReducer = combineReducers({ // combine all reducer into 1 root reducer
  cake: CakeReducer,
  icecream: IceCreamReducer,
})

export default rootReducer
