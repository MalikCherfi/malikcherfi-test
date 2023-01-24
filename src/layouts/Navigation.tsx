import React from "react";
import NavBar from "../components/styled-components/NavBar";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setStatus } from "../app/states/user";

const Navigation = () => {
  const dispatch = useAppDispatch();

  const connexionStatus = useAppSelector((state) => state.user.isConnected);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  // Disconnect User
  const deleteToken = () => {
    localStorage.setItem("auth_token", "false");
    dispatch(setStatus(false));
  };

  return (
    <>
      <NavBar id="nav-bar">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          {!isLoading && !connexionStatus ? (
            <li>
              <Link
                to="login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Se connecter
              </Link>
            </li>
          ) : (
            <a
              style={{ cursor: "pointer", color: "white" }}
              onClick={deleteToken}
            >
              <li>Se déconnecter</li>
            </a>
          )}
        </ul>
      </NavBar>
    </>
  );
};

export default Navigation;
