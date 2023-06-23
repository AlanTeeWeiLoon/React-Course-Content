import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./Components/Router/Menu";
import Welcome from "./Components/Router/Welcome";
import Home from "./Components/Router/Home";
import About from "./Components/Router/About";
import Contact from "./Components/Router/Contact";
import PageNotFound from "./Components/Router/PageNotFound";
import User from "./Components/Router/User";
import UserList from "./Components/Router/UserList";
import UserDetails from "./Components/Router/UserDetails";
import Comment from "./Components/Router/Comment";
import PostParent from "./Components/Router/PostParent";
import AddPost from "./Components/Router/AddPost";
import EditPost from "./Components/Router/EditPost";
import Login from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";

import Props from "./Components/Props/index";
import CallBack from "./Components/CallBack/index";
import UseState_Demo from "./Components/Hooks/UseState/UseState_Demo";
import ObjectUsingUseState from "./Components/Hooks/UseState/ObjectUsingUseState";
import ArrayOfObjectsUsingUseState from "./Components/Hooks/UseState/ArrayOfObjectsUsingUseState";
import Todo from "./Components/Hooks/UseState/Todo_SampleOfUseState/Todo";
import UseRef_Demo from "./Components/Hooks/UseRef/UseRef_Demo";
import UseWindowWidth from "./Components/Hooks/CustomHook/useWindowWidth/Layout";
import AxiosComment from "./Components/Axios/Comment";
import HOC from "./Components/HOC/index";
import UseContext_Demo from "./Components/Hooks/UseContext/index";
import UseReducer_Demo from "./Components/Hooks/UseReducer/UseReducer_Demo";
import UseMemo_Demo from "./Components/Hooks/UseMemo/UseMemo_Demo";
import UseCallBack_Demo from "./Components/Hooks/UseCallBack/UseCallBack_Demo";
import Controlled_Uncontrolled_Component from "./Components/Controlled_Uncontrolled_Component/index";
import Redux_Demo from "./Components/ReduxComponent/index";

function App() {
  return (
    // <Props /> // -------------------------------- Props
    // <CallBack /> // ----------------------------- CallBack
    // <UseState_Demo /> // ------------------------ UseState
    // <ObjectUsingUseState /> // ------------------ Object Using UseState
    // <ArrayOfObjectsUsingUseState /> // ---------- Array of Object Using UseState
    // <Todo /> // --------------------------------- Sample application using UseState hook
    // <UseRef_Demo />  // ------------------------- UseRef
    // <UseWindowWidth /> // ----------------------- Create a custom hook as useWindowWidth to detect screen size
    // <AxiosComment /> // ------------------------- AXIOS - GET, POST, PUT, DELETE Method example
    // <HOC /> // ---------------------------------- Higher Order Components (HOC) Demo
    // <UseContext_Demo /> // ---------------------- UseContext
    // <UseReducer_Demo /> // ---------------------- UseReducer
    // <UseMemo_Demo /> // ------------------------- UseMemo
    // <UseCallBack_Demo /> // --------------------- UseCallBack
    // <Controlled_Uncontrolled_Component /> // ---- Controlled and Uncontrolled Component
    // <Redux_Demo /> // --------------------------- Use Cake Shop as Example to demo Action, Reducer, Store

    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comment" element={<PostParent />}>
          <Route path="" element={<Comment />} />
          <Route path="/comment/addpost" element={<AddPost />} />
          <Route path="/comment/editpost/:id" element={<EditPost />} />
        </Route>

        {/* Wildcard Route */}
        <Route path="*" element={<PageNotFound />} />

        <Route path="/details" element={<User />}>
          <Route path="" element={<UserList />} />
          <Route path=":id" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App