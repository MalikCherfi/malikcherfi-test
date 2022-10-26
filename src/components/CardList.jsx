import UserCard from "./UserCard.jsx";

const CardList = ({ users }) => {
  const CardColors = ["#003844", "#006C67", "#F194B4", "#FFB100", "#CA3C25", "#7FB069", "#F0386B"];

  return (
    <>
      {users.map((user, index) => (
        <UserCard
          color={CardColors[Math.floor(Math.random() * CardColors.length)]}
          name={user.name}
          lastname={user.lastname}
          email={user.email}
          key={index}
        />
      ))}
    </>
  );
};

export default CardList;
