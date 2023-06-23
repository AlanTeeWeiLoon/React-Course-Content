import React from "react";
import ComponentB from "./ComponentB";

export default function ComponentA({name, gender}) { // receiveing props from index
  return (
    <div>
      {/* Pass props to ComponentB */}
      <ComponentB name={name} gender={gender} />
    </div>
  );
}
