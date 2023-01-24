import React from "react";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  description: string;
  creationDate: string;
  beginningDate: string;
  endDate: string;
};

const ProjectsTable = ({
  id,
  name,
  description,
  creationDate,
  beginningDate,
  endDate,
}: Props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Nom </th>
          <th>Description</th>
          <th>Date de création</th>
          <th>Date de début</th>
          <th>Date de fin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <NavLink to={"/project/" + id}>{name}</NavLink>
          </td>
          <td>{description}</td>
          <td>{creationDate}</td>
          <td>{beginningDate}</td>
          <td>{endDate}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProjectsTable;
