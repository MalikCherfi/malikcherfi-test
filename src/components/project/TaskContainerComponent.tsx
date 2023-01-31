import React, { useState, useEffect } from "react";
// Styled-components
import { TaskContainer } from "../styled-components/pages/Project";
// Data
import deleteTasks from "../../data/tasks/deleteTasks";
// State
import { useAppSelector } from "../../app/hooks";
// Icon
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

type Props = {
  handleShow: Function;
};

const TaskContainerComponent = ({ handleShow }: Props) => {
  const tasks: Array<any> = useAppSelector((state) => state.task.tasks);

  const [checkboxState, setCheckboxState] = useState(
    {} as { [key: number]: boolean }
  );

  useEffect(() => {
    // Retrieve checkbox state from local storage
    const storedState = localStorage.getItem("checkboxState");
    if (storedState) {
      setCheckboxState(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    // Store checkbox state in local storage
    localStorage.setItem("checkboxState", JSON.stringify(checkboxState));
  }, [checkboxState]);

  const handleCheckboxChange = (index: any) => {
    setCheckboxState({
      ...checkboxState,
      [index]: !checkboxState[index],
    });
  };

  return (
    <TaskContainer>
      {tasks.map((task, index) => {
        return (
          <div
            key={index}
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

            <div
              style={{
                width: "65%",
                overflowY: "auto",
                whiteSpace: "normal",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: "1px" }} key={task._id}>
                {task.description}
              </p>
            </div>
            <input
              type="checkbox"
              checked={checkboxState[index] || false}
              onChange={() => handleCheckboxChange(index)}
            />
          </div>
        );
      })}
    </TaskContainer>
  );
};

export default TaskContainerComponent;
