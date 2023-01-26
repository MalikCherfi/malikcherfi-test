let calendar: any = {};

for (let year = 2023; year <= 2100; year++) {
  calendar[year] = {
    January: 31,
    February: 32 - new Date(year, 1, 32).getDate(),
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
}

export default calendar;
