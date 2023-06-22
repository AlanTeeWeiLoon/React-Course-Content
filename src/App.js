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
import Posts from "./Components/Axios/Comment";
import Comment from "./Components/Axios/Comment"
import PostParent from "./Components/Router/PostParent";
import AddPost from "./Components/Router/AddPost";
import EditPost from "./Components/Router/EditPost";
import Login from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        
        <Route path="/" element={<Welcome />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/comment" element={<PostParent />}>
          <Route path="" element={<Comment/>}/>
          <Route path="/comment/addpost" element={<AddPost/>}/>
          <Route path="/comment/editpost/:id" element={<EditPost/>}/>
        </Route>

        {/* Wildcard Route */}
        <Route path="*" element={<PageNotFound />}/>

        <Route path="/details" element={<User />}>
          <Route path="" element={<UserList/>}/>
          <Route path=":id" element={<UserDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
