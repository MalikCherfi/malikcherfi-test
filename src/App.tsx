import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// UTILS
import randomColors from "./utils/color";
// STORE
import { setStatus } from "./app/states/user";
import { setIsLoading } from "./app/states/user";
import { setUsers } from "./app/states/user";
import { setColor } from "./app/states/color";
// DATA
import getUsers from "./data/getUsers";
// AUTH
import checkUsersAuth from "./data/checkUsersAuth";
// LAYOUTS
import Navigation from "./layouts/Navigation";
// PAGES
import Home from "./pages/Home";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
// COMPONENTS
import Background from "./components/styled-components/Background";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check token and connect user if there is token
    const token = localStorage.getItem("auth_token")!;
    checkUsersAuth({ token, dispatch, setStatus, setIsLoading });

    // Get users
    getUsers({ dispatch, setUsers });
  }, []);

  // Change background color
  window.addEventListener("click", () => {
    document.getElementById("background")!.style.backgroundColor ===
    randomColors[0]
      ? (document.getElementById("background")!.style.backgroundColor =
          randomColors[1])
      : (document.getElementById("background")!.style.backgroundColor =
          randomColors[0]);

    // Change text color
    dispatch(
      setColor(
        randomColors.filter(
          (color: string) =>
            color !==
            document.getElementById("background")!.style.backgroundColor
        )
      )
    );
  });

  return (
    <>
      <Background id="background">
        <Routes>
          <Route element={<Navigation />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Background>
    </>
  );
};

export default App;
