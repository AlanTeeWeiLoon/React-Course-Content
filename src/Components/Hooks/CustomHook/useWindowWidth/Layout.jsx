import React from "react";
import useWindowWidth from "./useWindowWidth";

export default function Layout() {

  const screenSize = useWindowWidth()

  return <div>{screenSize ? "Small Screen" : "Large Screen"}</div>
}
