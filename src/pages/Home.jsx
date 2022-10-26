import Container from "../components/styled-components/Container.js";
import CardList from "../components/CardList.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const connexionStatus = useSelector((state) => state.user.isConnected);
  const isLoading = useSelector((state) => state.user.isLoading);
  const users = useSelector((state) => state.user.users);

  return (
    <>
      {!isLoading && (
        <Container>
          {!connexionStatus ? (
            <h1>
              Vous devez vous connecter pour acceder à la liste des utilisateurs
            </h1>
          ) : (
            <CardList users={users} />
          )}
        </Container>
      )}
    </>
  );
};

export default Home;
