import calendar from "./calendar";

const setCalendar = () => {
  // CALENDAR FUNCTION
  const days: any = [];
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
  return { days, years, months };
};

export default setCalendar;
