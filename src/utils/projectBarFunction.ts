type Props = {
  beginningDate: string;
  endDate: string;
};

export const setProjectBar = ({ beginningDate, endDate }: Props) => {
  let date1: any;
  let date2: any;
  let diffTime: any;
  let diffDays: any;

  let year = null;
  let month = null;
  let day = null;
  let positionOfBeginDate: number = 0;

  year = parseInt(beginningDate.slice(0, 4));
  month = parseInt(beginningDate.slice(5, 7));
  day = parseInt(beginningDate.slice(8, 10));

  date1 = new Date(beginningDate);
  date2 = new Date(endDate);
  diffTime = Math.abs(date2 - date1);
  diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  positionOfBeginDate += (year - 2023) * 10950;

  positionOfBeginDate +=
    (month - 1) * (new Date(year, month + 1, 0).getDate() * 30);

  positionOfBeginDate += parseInt(beginningDate.slice(8, 10)) * 30 - 30;

  return { positionOfBeginDate, diffDays };
};
