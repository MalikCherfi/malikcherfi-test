import Container from "../components/styled-components/Container.js";
import CardList from "../components/CardList.jsx";
import { useSelector } from "react-redux";
import GlobalStyle from "../components/styled-components/GlobalStyle.js";

const Home = () => {
  const connexionStatus = useSelector((state) => state.user.isConnected);
  const isLoading = useSelector((state) => state.user.isLoading);
  const users = useSelector((state) => state.user.users);
  const color = useSelector((state) => state.color.color);

  return (
    <>
      {!isLoading && (
        <Container row>
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
