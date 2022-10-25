import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "./app/states/user.js";
import { setUsers } from "./app/states/user.js";
// DATA
import getUsers from "./data/getUsers.js";
// AUTH
import checkUsersAuth from "./data/checkUsersAuth.js";
// LAYOUTS
import Navigation from "./layouts/Navigation.jsx";
// PAGES
import Home from "./pages/Home.jsx";
import Login from "./pages/Login/index.jsx";
import Register from "./pages/Register/index.jsx";
// COMPONENTS
import Background from "./components/styled-components/Background.js";

const App = () => {
  const dispatch = useDispatch();

  // Check token and connect user if there is token
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token !== "false") {
      checkUsersAuth(token, dispatch, setStatus);
    }
  }, [dispatch]);

  useEffect(() => {
    getUsers(dispatch, setUsers);
  }, []);

  return (
    <>
      <Navigation />

      <Background>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Background>
    </>
  );
};

export default App;
