import React from 'react'
import UserCard  from "./UserCard";
import { useAppSelector } from '../app/hooks'

type Props = {
  users: object[],
}

const CardList = ({ users }: Props) => {
  const color = useAppSelector((state) => state.color.color);

  return (
    <>
      {users.map((user: any, index) => (
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
