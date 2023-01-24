import axios from "../helpers/axios.config";

type Props = {
  payload: object;
  toastSuccess: Function;
};

const registerUsers = async ({payload, toastSuccess}: Props) => {
 return await axios
    .post("/register", payload)
    .then(() => {
      return toastSuccess("Inscription réussi, veuillez vous connecter");
    })
    .catch((err) => console.log(err));
};

// const beginDate = new Date("2022-01-01");
// const endDate = new Date("2022-02-01");
// const duration = endDate.getTime() - beginDate.getTime();

// const scaleFactor = 30; // for example, 30 pixels per day

// const taskWidth = (duration / (1000 * 60 * 60 * 24)) * scaleFactor;


export default registerUsers;
