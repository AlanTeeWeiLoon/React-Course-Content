import React from "react";
import CakeContainer from "./CakeContainer";
import IceCreamContainer from "./IceCreamContainer";
import { Provider } from "react-redux";
import { store } from "../../Redux/Store/store.js";


function Index() {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
        <br />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}


export default Index;
