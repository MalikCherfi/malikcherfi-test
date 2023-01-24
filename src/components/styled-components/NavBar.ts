import styled from "styled-components";

const NavBar = styled.nav`
  z-index: 1;
  width: 15%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0);
  font-weight: 400;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  transition: 1s;

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  li {
    padding: 5px;
  }

  div {
    margin-top: 30px;
  }
`;

export default NavBar;
