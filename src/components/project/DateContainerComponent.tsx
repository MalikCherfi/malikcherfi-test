import React from "react";
import { DateContainer } from "../styled-components/pages/Project";
// Utils
import setCalendar from "../../utils/calendarFunction";
import calendar from "../../utils/calendar";

const DateContainerComponent = () => {
  // Utils
  const date = setCalendar();

  return (
    <DateContainer>
      {date.years.map((year) => {
        return (
          <div
            key={year}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div style={{ height: "30%" }}>
              <div style={{ display: "flex" }}>
                {date.months.map((month: string) => {
                  return (
                    <div
                      key={month}
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
                {date.days.map((day: number) => {
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
                      <p style={{ margin: "1px" }}>{day}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </DateContainer>
  );
};

export default DateContainerComponent;
