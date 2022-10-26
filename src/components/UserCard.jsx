const UserCard = ({ name, lastname, email, color }) => {
  return (
    <div style={{ width: "18rem", height: "100px" }}>
      <h1 style={{ color: color, textAlign: "center" }}>
        {name}
        {" "}
        {lastname}
      </h1>
      <h2 style={{ color: color, textAlign: "center" }}>{email}</h2>
    </div>
  );
};

export default UserCard;
