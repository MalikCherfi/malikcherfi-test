import UserCard from "./UserCard.jsx";
import { useSelector } from "react-redux";

const CardList = ({ users }) => {
  const color = useSelector((state) => state.color.color);

  return (
    <>
      {users.map((user, index) => (
        <UserCard
          color={color[Math.floor(Math.random() * color.length)]}
          name={user.name}
          lastname={user.lastName}
          email={user.email}
          key={index}
        />
      ))}
    </>
  );
};

export default CardList;
