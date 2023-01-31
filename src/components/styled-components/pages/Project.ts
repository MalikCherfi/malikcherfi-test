import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 90vh;
  display: flex;
  background-color: white;
  border-radius: 20px;
  box-shadow: -1px 1px 15px -3px #000000;
`;

export const TaskContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 70%;
`;

export const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: auto;
`;

export const LeftContainer = styled.div`
  width: 25%;
  height: 100%;
  box-shadow: 10px 0 5px -5px #888;
`;

export const DateContainer = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
`;

export const TaskBarContainer = styled.div`
  position: relative;
  height: 70%;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
