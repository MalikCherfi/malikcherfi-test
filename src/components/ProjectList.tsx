import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  projects: object[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project: any, index) => (
        <ul>
          <NavLink to={"/project/" + project._id}>
            <li>{project.name}</li>
          </NavLink>
        </ul>
      ))}
    </>
  );
};

export default ProjectList;
