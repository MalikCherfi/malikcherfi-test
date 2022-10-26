import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// UTILS
import randomColors from "./utils/color.js";
// STORE
import { setStatus } from "./app/states/user.js";
import { setIsLoading } from "./app/states/user.js";
import { setUsers } from "./app/states/user.js";
import { setColor } from "./app/states/color.js";
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

  useEffect(() => {
    // Check token and connect user if there is token
    const token = localStorage.getItem("auth_token");
      checkUsersAuth(token, dispatch, setStatus, setIsLoading);
    
    // Get users
    getUsers(dispatch, setUsers);
  }, []);

  // Change background color
  window.addEventListener("click", () => {
    document.getElementById("background").style.backgroundColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];

    // Change text color
    dispatch(
      setColor(
        randomColors.filter(
          (color) =>
            color !==
            document.getElementById("background").style.backgroundColor
        )
      )
    );
  });

  return (
    <>
      <Navigation />

      <Background id="background">
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
