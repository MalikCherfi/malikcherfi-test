import React from "react";
import { useParams } from "react-router-dom";

const Project = () => {
  const id = useParams();

  return (
    <>
      <div>{id.id}</div>
    </>
  );
};

export default Project;
