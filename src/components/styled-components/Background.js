import styled from "styled-components";

const Background = styled.div`
  background-color: #FFCA3A;
  min-height: 100vh;

  img {
    display: block;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

export default Background;
