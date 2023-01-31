import React from "react";
// Components
import DateContainerComponent from "../../components/project/DateContainerComponent";
import ProjectBarContainerComponent from "./ProjectBarContainerComponent";
import TaskBarContainerComponent from "../../components/project/TaskBarContainerComponent";
// Styled-components
import { RightContainer } from "../styled-components/pages/Project";

const RightContainerComponent = ({ beginningDate, endDate }: any) => {
  return (
    <RightContainer>
      <DateContainerComponent />
      <ProjectBarContainerComponent
        beginningDate={beginningDate}
        endDate={endDate}
      />
      <TaskBarContainerComponent />
    </RightContainer>
  );
};

export default RightContainerComponent;
