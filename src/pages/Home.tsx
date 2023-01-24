import React from "react";
import Container from "../components/styled-components/Container";
import CardList from "../components/CardList";
import { useAppSelector } from "../app/hooks";
import GlobalStyle from "../components/styled-components/GlobalStyle";

const Home = () => {
  const connexionStatus = useAppSelector((state) => state.user.isConnected);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const users = useAppSelector((state) => state.user.users);
  const textColor = useAppSelector((state) => state.color.textColor);

  return (
    <div>
      {!isLoading ? (
        <Container justifyContent="center" flexDirection="row">
          {!connexionStatus ? (
            <h1 style={{ color: textColor, textAlign: "center" }}>
              Vous devez vous connecter pour accéder à la liste des utilisateurs
            </h1>
          ) : (
            <CardList users={users} />
          )}
        </Container>
      ) : null}
      <GlobalStyle />
    </div>
  );
};

export default Home;
