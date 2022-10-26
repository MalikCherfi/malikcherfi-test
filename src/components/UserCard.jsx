import Card from "react-bootstrap/Card";

const UserCard = ({ name, lastname, email, color }) => {
  return (
    <Card
      key={color}
      text="white"
      style={{ width: "18rem", backgroundColor: color }}
      className="mb-2"
    >
      <Card.Header>{color}</Card.Header>
      <Card.Body>
        <Card.Title>{email}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
