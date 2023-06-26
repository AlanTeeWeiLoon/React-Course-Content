import React, { useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffect_Demo() {

  //useEffect will render as sequence
  useEffect(() => {
    console.log("Render useEffect 1");
  })

  useEffect(() => {
    console.log("Render useEffect 2");
  })

  // useLayoutEffect will always render first before the component render (before useEffect)
  useLayoutEffect(() => {
    console.log("Render useLayoutEffect");
  })

  return <div className="container mt-5">Demo UseLayoutEffect</div>
}
