import styled from "styled-components";

type Props = {
  justifyContent: string,
  flexDirection: string
}

const Container = styled.div<Props>`
  padding-top: 90px;
  min-height: 100vh;
  display: flex;
  justify-content: ${(p: Props) => (p.justifyContent)};
  align-items: center;
  align-content: center;
  flex-direction: ${(p: Props) => (p.flexDirection)};
  flex-wrap: wrap;
`;

export default Container;
