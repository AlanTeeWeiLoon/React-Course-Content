import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

function Index() {
  return (
    <div>
      <ClickCounter info="My name is Peter" />
      <HoverCounter info="My name is Ross" />
    </div>
  )
}

export default Index;
