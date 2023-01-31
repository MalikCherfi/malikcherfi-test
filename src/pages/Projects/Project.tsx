import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Data
import getTasks from "../../data/tasks/getTasks";
import getProject from "../../data/projects/getProject";
// State
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { setTasks } from "../../app/states/task";
import { setProject } from "../../app/states/project";
// Components
import RightContainerComponent from "../../components/project/RightContainerComponent";
import LeftContainerComponent from "../../components/project/LeftContainerComponent";
import ModalComponent from "../../components/ModalComponent";
// Styled-components
import { Container } from "../../components/styled-components/pages/Project";

type MyParams = {
  id: string;
};

const Project = () => {
  const dispatch = useDispatch();
  const { id } = useParams<keyof MyParams>() as MyParams;

  const project: any = useAppSelector((state) => state.project.project);

  // State
  const [show, setShow] = useState({ status: false, taskId: "", form: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTasks({ projectId: id, dispatch, setTasks })
    getProject({ id, dispatch, setProject }).then(() => {
      setIsLoading(false);
    });
  }, []);

  const handleShow = (taskId: any, categoryForm: any) => {
    setShow({ status: true, taskId: taskId, form: categoryForm });
  };
  const handleClose = () => setShow({ status: false, taskId: "", form: "" });

  return (
    <>
      {" "}
      {!isLoading ? (
        <Container>
          <LeftContainerComponent
            setShow={setShow}
            name={project.name}
            handleShow={handleShow}
          />
          <RightContainerComponent
            beginningDate={project.beginningDate}
            endDate={project.endDate}
          />
          <ModalComponent
            status={show.status}
            taskId={show.taskId}
            categoryForm={show.form}
            handleClose={handleClose}
            id={id}
          />
        </Container>
      ) : (
        <div>
          <h1>chargement</h1>
        </div>
      )}
    </>
  );
};

export default Project;
