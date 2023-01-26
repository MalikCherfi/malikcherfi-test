import React, { useState } from "react";
import ProjectList from "../../components/ProjectList";
import ProjectForm from "../../components/ProjectsForm";
import { useAppSelector } from "../../app/hooks";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Projects = () => {
  const projects = useAppSelector((state) => state.project.projects);

  const [show, setShow] = useState({ status: false, form: "", id: "" });

  const handleClose = () => setShow({ status: false, form: "", id: "" });
  const handleShow = () => setShow({ status: true, form: "add", id: "" });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button variant="primary" onClick={handleShow}>
        Ajouter
      </Button>

      <Modal show={show.status} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectForm categoryForm={show.form} id={show.id} />
        </Modal.Body>
      </Modal>
      <ProjectList projects={projects} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Projects;
