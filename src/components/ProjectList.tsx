import React from "react";
import ProjectsTable from "./ProjectsTable";

type Props = {
  projects: object[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project: any, index) => (
        <ProjectsTable
          name={project.name}
          description={project.description}
          creationDate={project.creationDate}
          beginningDate={project.beginningDate}
          endDate={project.endDate}
          id={project._id}
          key={index}
        />
      ))}
    </>
  );
};

export default ProjectList;
