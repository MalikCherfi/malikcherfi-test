import React from "react";
import UserCard from "./UserCard";
import { useAppSelector } from "../app/hooks";

type Props = {
  projects: object[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project: any, index) => (
        <ul>
          <li>{project.name}</li>
        </ul>
      ))}
    </>
  );
};

export default ProjectList;
