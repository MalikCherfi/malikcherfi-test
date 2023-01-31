import React from "react";
// Components
import AddButtonContainer from "../../components/project/AddButtonContainer";
import TaskContainerComponent from "../../components/project/TaskContainerComponent";
// Styled-components
import { LeftContainer } from "../styled-components/pages/Project";

type Props = {
  setShow: Function;
  name: string;
  handleShow: Function;
};

const LeftContainerComponent = ({ setShow, name, handleShow }: Props) => {
  return (
    <LeftContainer>
      <AddButtonContainer taskId={""} categoryForm={"add"} setShow={setShow} />
      <div
        className="project-title-container"
        style={{
          height: "10%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>{name}</h2>
      </div>
      <TaskContainerComponent handleShow={handleShow} />
    </LeftContainer>
  );
};

export default LeftContainerComponent;
