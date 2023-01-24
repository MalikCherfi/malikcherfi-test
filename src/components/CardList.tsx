import React from "react";
import UserCard from "./UserCard";
import { useAppSelector } from "../app/hooks";

type Props = {
  users: object[];
};

const CardList = ({ users }: Props) => {
  const textColor = useAppSelector((state) => state.color.textColor);
  const cardColor = useAppSelector((state) => state.color.cardColor);

  return (
    <>
      {users.map((user: any, index) => (
        <UserCard
          textColor={textColor[0]}
          cardColor={cardColor[0]}
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
