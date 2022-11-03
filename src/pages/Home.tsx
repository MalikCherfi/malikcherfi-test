import React from 'react'
import Container from "../components/styled-components/Container";
import CardList from "../components/CardList";
import { useSelector } from "react-redux";
import { useAppSelector } from '../app/hooks'
import GlobalStyle from "../components/styled-components/GlobalStyle";



const Home = () => {
  const connexionStatus = useAppSelector((state) => state.user.isConnected);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const users = useAppSelector((state) => state.user.users);
  const color = useAppSelector((state) => state.color.color);

  return (
    <>
      {!isLoading && (
        <Container row="row">
          {!connexionStatus ? (
            <h1 style={{ color: color, textAlign: "center" }}>
              Vous devez vous connecter pour accéder à la liste des utilisateurs
            </h1>
          ) : (
            <CardList users={users} />
          )}
        </Container>
      )}
      <GlobalStyle />
    </>
  );
};

export default Home;
