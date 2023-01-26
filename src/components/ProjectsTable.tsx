import React, { useState } from "react";
import AddProjectForm from "./ProjectsForm";
import deleteProjects from "../data/projects/deleteProjects";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

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
  const [show, setShow] = useState({ status: false, form: "", id: id });

  const handleClose = () => setShow({ status: false, form: "", id: id });
  const handleShow = () => setShow({ status: true, form: "modify", id: id });

  return (
    <>
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
            <td>
              {" "}
              <Button variant="primary" onClick={handleShow}>
                Modifier
              </Button>
            </td>
            <td>
              {" "}
              <Button
                variant="primary"
                onClick={() => {
                  deleteProjects({ id, toastSuccess: toast.success });
                }}
              >
                Supprimer
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier le Projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProjectForm categoryForm={show.form} id={show.id} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectsTable;
