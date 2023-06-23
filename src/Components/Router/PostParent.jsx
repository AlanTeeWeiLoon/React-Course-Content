import React from "react";
import { Outlet } from "react-router-dom";
import SubMenu from "./SubMenu";

export default function PostParent() {
  return (
    <div>
      <SubMenu />
      <Outlet />
    </div>
  )
}
