import React from "react";
import CardContainer from "./styled-components/CardContainer";

type Props = {
  name: string;
  lastname: string;
  email: string;
  textColor: string;
  cardColor: string;
};

const UserCard = ({ name, lastname, email, textColor }: Props) => {
  return (
    <CardContainer  id="user-card">
      <h1 style={{ color: textColor, textAlign: "center" }}>
        {name} {lastname}
      </h1>
      <h2 style={{ color: textColor, textAlign: "center" }}>{email}</h2>
    </CardContainer>
  );
};

export default UserCard;
