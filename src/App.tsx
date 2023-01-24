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
import { setTextColor } from "./app/states/color";
// DATA
import getUsers from "./data/getUsers";
// AUTH
import checkUsersAuth from "./data/checkUsersAuth";
// LAYOUTS
import Navigation from "./layouts/Navigation";
// PAGES
import Users from "./pages/Users/Users";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Projects/Project";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
// COMPONENTS
import Background from "./components/styled-components/Background";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check token and connect user if there is token
    const token = localStorage.getItem("auth_token")!;
    checkUsersAuth({ token, dispatch, setStatus });

    dispatch(setIsLoading(false));

    // Get users
    getUsers({ dispatch, setUsers });
  }, []);

  // Change opacity of Nav on scroll
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let nav = document.getElementById("nav-bar");
    if (scrollY >= 15) {
      nav!.style.opacity = "0";
    } else {
      nav!.style.opacity = "1";
    }
  });

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
      setTextColor(
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
      <Navigation />

      <Background id="background">
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Background>
    </>
  );
};

export default App;
