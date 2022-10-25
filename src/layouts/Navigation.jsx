import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStatus } from "../app/states/user.js";

const Navigation = () => {
  const dispatch = useDispatch();

  const connexionStatus = useSelector((state) => state.user.isConnected);

  const deleteToken = () => {
    localStorage.setItem("auth_token", false);
    dispatch(setStatus(false));
  };

  return (
    <>
      <Nav id="nav-bar">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          {!connexionStatus ? (
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
              <li>
                Se déconnecter
              </li>
            </a>
          )}
        </ul>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  font-weight: 400;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  li {
    padding: 30px;
  }
`;

export default Navigation;
