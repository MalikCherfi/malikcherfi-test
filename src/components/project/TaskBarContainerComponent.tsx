import React, { useState, useEffect } from "react";
// Styled-components
import { TaskBarContainer } from "../styled-components/pages/Project";
// Utils
import setTasksBar from "../../utils/tasksBarFunction";
// State
import { useAppSelector } from "../../app/hooks";

const TaskBarContainerComponent = () => {
  const [barTaskHeight, setBarTaskHeight] = useState([]);
  const [offSet, setOffSet] = useState([]);
  const [checkboxState, setCheckboxState] = useState(
    {} as { [key: number]: boolean }
  );

  const tasks: Array<any> = useAppSelector((state) => state.task.tasks);
  const taskBar = setTasksBar(tasks);

  useEffect(() => {
    // Retrieve checkbox state from local storage
    const storedState = localStorage.getItem("checkboxState");
    if (storedState) {
      setCheckboxState(JSON.parse(storedState));
    }
    console.log(checkboxState);
  }, [localStorage.getItem("checkboxState")]);

  // Position of task bar
  let offset: any = [];
  let tasksHeight: any = [];

  const observer = new MutationObserver((mutations, obs) => {
    const element = document.getElementsByClassName("task-container");
    if (element) {
      for (let i = 0; i < element.length; i++) {
        offset.push((element[i] as HTMLDivElement).offsetTop);
        tasksHeight.push((element[i] as HTMLDivElement).style.height);
      }

      setOffSet(offset);
      setBarTaskHeight(tasksHeight);

      obs.disconnect();
      return;
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
  });

  return (
    <TaskBarContainer>
      {taskBar.diffDays.map((e: any, index: any) => {
        return (
          <div
            key={e}
            style={{
              height: barTaskHeight[index],
              display: "flex",
              alignItems: "center",
              top: `${offSet[index]}px`,
            }}
          >
            <div
              style={{
                boxShadow: "4px 5px 15px -4px #000000",
                position: "absolute",
                backgroundColor: "rgb(57, 57, 58)",
                borderRadius: "10px",
                width: `${e * 30}px`,
                height: "10px",
                opacity: !checkboxState[index] ? "0.5" : "1",
                marginLeft: `${taskBar.positionOfBeginDate[index]}px`,
              }}
            ></div>
          </div>
        );
      })}
    </TaskBarContainer>
  );
};
export default TaskBarContainerComponent;
