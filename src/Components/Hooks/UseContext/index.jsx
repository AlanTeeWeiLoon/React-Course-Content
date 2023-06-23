import React, { createContext } from "react";
import ComponentA from "./ComponentA";

// UseContext needs => Create, Provider, Consumer
// UseContext is an advanced version of Context API

// create context
const data1 = createContext()
const data2 = createContext()

function Index() {
  const namePassByProps = "Props - Phoebe"
  const genderPassByProps = "Props - Female"
  const namePassByUseContext = "UseContext - Phoebe"
  const genderPassByUseContext = "UseContext - Female"
  return (
    <div>

      {/* Pass by UseContext Hook with Provider property */}
      <data1.Provider value={namePassByUseContext}>
        <data2.Provider value={genderPassByUseContext}>

          {/* Normal pass by props */}
          {/* Pass to child component - ComponentC will cause Props Drilling */}
          <ComponentA name={namePassByProps} gender={genderPassByProps} />

        </data2.Provider>
      </data1.Provider>

    </div>
  );
}

export default Index
export { data1, data2 } // export context data
