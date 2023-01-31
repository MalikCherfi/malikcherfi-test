import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import TasksForm from "./TasksForm";

type Props = {
  status: boolean;
  taskId: string;
  categoryForm: string;
  handleClose: Function;
  id: string;
};

const ModalComponent = ({
  status,
  taskId,
  categoryForm,
  handleClose,
  id,
}: Props) => {
  return (
    <Modal
      show={status}
      onHide={() => {
        handleClose()
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un Projet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TasksForm projectId={id} id={taskId} categoryForm={categoryForm} />
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
