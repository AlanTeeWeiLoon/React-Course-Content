import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger"; // will log prev state and current state in console
import thunk from "redux-thunk"; // will log prev state and current state in console
import rootReducer from "../Reducer/rootReducer.js";

// 1 store only can contain 1 reducer so combine all reducer into rootReducer
export const store = createStore(rootReducer, applyMiddleware(logger)) 
