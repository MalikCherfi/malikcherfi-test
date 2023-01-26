import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getTasks from "../../data/tasks/getTasks";
import deleteTasks from "../../data/tasks/deleteTasks";
import TasksForm from "../../components/TasksForm";
import calendar from "../../utils/calendar";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { setTasks } from "../../app/states/task";
import { useAppSelector } from "../../app/hooks";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

type MyParams = {
  id: string;
};

const Project = () => {
  const tasks: Array<any> = useAppSelector((state) => state.task.tasks);

  const { id } = useParams<keyof MyParams>() as MyParams;

  const [show, setShow] = useState({ status: false, taskId: "", form: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [offSet, setOffSet] = useState([]);
  const [barTaskHeight, setBarTaskHeight] = useState([]);

  const handleClose = () => setShow({ status: false, taskId: "", form: "" });
  const handleShow = (taskId: any, categoryForm: any) =>
    setShow({ status: true, taskId: taskId, form: categoryForm });

  const dispatch = useDispatch();

  useEffect(() => {
    getTasks({ projectId: id, dispatch, setTasks });
    // offset = child[0].offsetTop;
    // setIsLoading(false);
  }, []);

  // CALENDAR FUNCTION
  let days: any = [];
  const years = Object.keys(calendar);
  const months = Object.keys(calendar[2023]);

  const numberOfDaysInMonth = Object.keys(calendar[2023]).map((month) => {
    return calendar[2023][month];
  });

  for (let i = 0; i <= numberOfDaysInMonth.length; i++) {
    for (let day = 1; day <= numberOfDaysInMonth[i]; day++) {
      days.push(day);
    }
  }

  // TASKS BAR FUNCTION
  const tasksDate: any = {};
  let beginningDate;
  let endDate;

  tasks.map((task) => {
    return (
      (beginningDate = new Date(task.beginningDate)),
      (endDate = new Date(task.endDate)),
      (tasksDate[task._id] = [beginningDate.toISOString().slice(0, 10)]),
      tasksDate[task._id].push(endDate.toISOString().slice(0, 10))
    );
  });

  let date1: any = [];
  let date2: any = [];
  let diffTime: any = [];
  let diffDays: any = [];

  let count = 0;
  let year = null;
  let month = null;
  let day = null;
  const positionOfBeginDate: any = [];

  Object.keys(tasksDate).map((e, index) => {
    return (
      (count = 0),
      (year = parseInt(tasksDate[e][0].slice(0, 4))),
      (month = parseInt(tasksDate[e][0].slice(5, 7))),
      (day = parseInt(tasksDate[e][0].slice(8, 10))),
      date1.push(new Date(tasksDate[e][0])),
      date2.push(new Date(tasksDate[e][1])),
      diffTime.push(Math.abs(date2[index] - date1[index])),
      diffDays.push(Math.ceil(diffTime[index] / (1000 * 60 * 60 * 24))),
      (count += (year - 2023) * 10950),
      (count += (month - 1) * (new Date(year, month + 1, 0).getDate() * 30)),
      (count += parseInt(tasksDate[e][0].slice(8, 10)) * 30 - 30),
      positionOfBeginDate.push(count)
    );
  });

  let offset: any = [];
  let tasksHeight: any = [];

  const observer = new MutationObserver((mutations, obs) => {
    const hello = document.getElementsByClassName("task-container");
    if (hello) {
      for (let i = 0; i < hello.length; i++) {
        offset.push((hello[i] as HTMLDivElement).offsetTop);
        tasksHeight.push((hello[i] as HTMLDivElement).style.height);
      }

      setOffSet(offset);
      setBarTaskHeight(tasksHeight);
      setIsLoading(false);

      obs.disconnect();
      return;
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  return (
    <>
      <Container>
        <LeftContainer>
          <AddButtonContainer>
            <Button
              variant="primary"
              onClick={() => {
                handleShow("", "add");
              }}
            >
              Ajouter taches
            </Button>
          </AddButtonContainer>
          <TaskContainer>
            {tasks.map((task) => {
              return (
                <div
                  className="task-container"
                  style={{
                    height: "40px",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "35%",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <button
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        deleteTasks({ id: task._id });
                      }}
                    >
                      <AiFillDelete />
                    </button>
                    <button
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        handleShow(task._id, "modify");
                      }}
                    >
                      <BsFillPencilFill />
                    </button>
                  </div>

                  <div style={{ width: "65%", overflowY: "auto", whiteSpace: "normal" }}>
                    <p style={{ margin: "1px" }} key={task._id}>
                      {task.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </TaskContainer>
        </LeftContainer>

        <RightContainer>
          <DateContainer>
            {years.map((year, index) => {
              return (
                <div
                  id="year-width"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ height: "30%" }}>
                    <div style={{ display: "flex" }}>
                      {months.map((month: any) => {
                        return (
                          <div
                            style={{
                              width: `${calendar[year][month] * 30}px`,
                              display: "flex",
                              justifyContent: "center",
                              borderRight: "1px solid",
                            }}
                          >
                            <p>{month}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        position: "relative",
                      }}
                    >
                      {days.map((day: any) => {
                        return (
                          <div
                            style={{
                              width: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              border: "1px solid",
                            }}
                          >
                            <p style={{ margin: "1" }}>{day}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {!isLoading && (
                    <TaskBarContainer>
                      {diffDays.map((e: any, index: any) => {
                        return (
                          <div
                            style={{
                              height: barTaskHeight[index],
                              display: "flex",
                              alignItems: "center",
                              top: `${offSet[index]}px`,
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                backgroundColor: "green",
                                borderRadius: "10px",
                                width: `${e * 30}px`,
                                height: "10px",
                                marginLeft: `${positionOfBeginDate[index]}px`,
                              }}
                            ></div>
                          </div>
                        );
                      })}
                    </TaskBarContainer>
                  )}
                </div>
              );
            })}
          </DateContainer>
        </RightContainer>

        <Modal show={show.status} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un Projet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TasksForm
              projectId={id}
              id={show.taskId}
              categoryForm={show.form}
            />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Project;

const Container = styled.div`
  width: 80vw;
  height: 90vh;
  display: flex;
  background-color: white;
  border-radius: 20px;
  box-shadow: -1px 1px 15px -3px #000000;
`;

const TaskContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 70%;
`;

const RightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 85%;
  overflow-x: scroll;
  overflow-y: auto;
`;

const LeftContainer = styled.div`
  width: 25%;
  height: 100%;
  box-shadow: 10px 0 5px -5px #888;
`;

const DateContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const TaskBarContainer = styled.div`
  position: relative;
  height: 70%;
  display: flex;
  flex-direction: column;
`;

const AddButtonContainer = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
