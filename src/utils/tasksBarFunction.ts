// TASKS BAR FUNCTION

const setTasksBar = (tasks: any) => {
  const tasksDate: any = {};

  let date1: any = [];
  let date2: any = [];
  let diffTime: any = [];
  let diffDays: any = [];

  let count = 0;
  let year = null;
  let month = null;
  let day = null;
  const positionOfBeginDate: any = [];

  tasks.map((task: any) => {
    return (
      (tasksDate[task._id] = [task.beginningDate]),
      tasksDate[task._id].push(task.endDate)
    );
  });

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

  return { positionOfBeginDate, diffDays };
};

export default setTasksBar;
