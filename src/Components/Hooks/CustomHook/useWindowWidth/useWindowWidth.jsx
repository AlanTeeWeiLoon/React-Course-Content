import React, { useEffect, useState } from "react";

export default function useWindowWidth() {
  const [smallScreen, setSmallScreen] = useState(false)

  useEffect(() => {
    CheckScreenSize()
    window.addEventListener("resize", CheckScreenSize)
  }, [])

  const CheckScreenSize = () => {
    setSmallScreen(window.innerWidth < 800)
  }

  return smallScreen
}
