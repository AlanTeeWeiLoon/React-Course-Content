import React, { useContext } from "react";
import { data1, data2 } from "../UseContext/index";

export default function ComponentC({ name, gender }) { // receiveing props from ComponentB

  // Can direct get the value from index by UseContext
  const namePassByUseContext = useContext(data1)
  const genderPassByUseContext = useContext(data2)

  return (
    <div className="container">
        
      {/* Props */}
      Hi my name is {name} and my gender is {gender}

      <br />

      {/* UseContext */}
      Hi my name is {namePassByUseContext} and my gender is {genderPassByUseContext}

      <br />

      {/* Context API */}
      {/* Using Consumer property to get data1 value from index */}

      <data1.Consumer>

        {/* Need to use Arrow Function and return when use the value in html */}
        {(name) => {
          return (
            <data2.Consumer>

              {/* If need to use multiple context data, then every context data need to use Consumer property and create Arrow Function to return */}
              {(gender) => {
                return (
                <span>
                    My name is {name} and my gender is {gender} ------ <b>Using Context API</b>
                </span>
                  
                )
              }}
            </data2.Consumer>
          )
        }}
      </data1.Consumer>

      {/* Context API will be very complexity if got a lot of context data, so that enhance to UseContext Hook */}
    </div>
  )
}
