import styled from "styled-components";

type Props = {
  row: string,
}

const Container = styled.div<Props>`
  padding-top: 90px;
  min-height: 100vh;
  display: flex;
  justify-content: ${(props) => (props.row ? "center" : "space-evenly")};
  align-items: center;
  align-content: center;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  flex-wrap: wrap;
`;

export default Container;
