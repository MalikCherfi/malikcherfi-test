import React, { useEffect, useState } from "react";
import { setProjectBar } from "../../utils/projectBarFunction";
import { useAppSelector } from "../../app/hooks";

const ProjectBarContainerComponent = ({ beginningDate, endDate }: any) => {
  const [barProjectHeight, setProjectTaskHeight] = useState("");
  const [offSet, setOffSet] = useState([]);
  const [checkboxState, setCheckboxState] = useState(
    {} as { [key: string]: boolean }
  );

  useEffect(() => {
    // Retrieve checkbox state from local storage
    const storedState = localStorage.getItem("checkboxState");
    if (storedState) {
      setCheckboxState(JSON.parse(storedState));
    }
  }, [localStorage.getItem("checkboxState")]);

  let checked = 0;

  Object.keys(checkboxState).map((e) => {
    if (checkboxState[e]) return (checked += 1);
  });

  const percentageOfCompleted =
    (checked / Object.keys(checkboxState).length) * 100;

  const projectBar = setProjectBar({
    beginningDate: beginningDate,
    endDate: endDate,
  });

  // Position of task bar
  let offset: any;
  let projectHeight: any;

  const observer = new MutationObserver((mutations, obs) => {
    const element = document.getElementsByClassName("project-title-container");
    if (element) {
      offset = (element[0] as HTMLDivElement).offsetTop;
      projectHeight = (element[0] as HTMLDivElement).style.height;

      setOffSet(offset);
      setProjectTaskHeight(projectHeight);

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
      <div
        style={{
          height: barProjectHeight,
          display: "flex",
          alignItems: "center",
          top: `${offSet}px`,
        }}
      >
        <div
          style={{
            boxShadow: "4px 5px 15px -4px #000000",
            position: "absolute",

            backgroundColor: "rgba(57, 57, 58, 0.5)",
            borderRadius: "10px",
            width: `${projectBar?.diffDays * 30}px`,
            height: "10px",
            marginLeft: `${projectBar?.positionOfBeginDate}px`,
          }}
        >
          {" "}
          <div
            style={{
              backgroundColor: "rgb(57, 57, 58)",
              borderRadius: "10px",
              width: `${percentageOfCompleted}%`,
              height: "10px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProjectBarContainerComponent;
