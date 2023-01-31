import React from "react";
// Styled-components
import { ButtonContainer } from "../styled-components/pages/Project";
import Button from "react-bootstrap/Button";

type Props = {
  taskId: string;
  categoryForm: string;
  setShow: Function;
};

const AddButtonContainer = ({ taskId, categoryForm, setShow }: Props) => {
  // Show Modal
  const handleShow = (taskId: any, categoryForm: any) => {
    setShow({ status: true, taskId: taskId, form: categoryForm });
  };

  return (
    <ButtonContainer>
      <Button
        style={{ backgroundColor: "rgb(57, 57, 58)", border: "none" }}
        onClick={() => {
          handleShow(taskId, categoryForm);
        }}
      >
        Ajouter taches
      </Button>
    </ButtonContainer>
  );
};

export default AddButtonContainer;
