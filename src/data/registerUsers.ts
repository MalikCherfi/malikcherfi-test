import axios from "../helpers/axios.config";

type Props = {
  data: object;
  toastSuccess: Function;
};

const registerUsers = async ({data, toastSuccess}: Props) => {
  await axios
    .post("/register", data)
    .then(() => {
      toastSuccess("Inscription réussi, veuillez vous connecter");
    })
    .catch((err) => console.log(err));
};

export default registerUsers;
