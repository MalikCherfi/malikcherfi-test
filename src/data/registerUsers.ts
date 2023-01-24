import axios from "../helpers/axios.config";

type Props = {
  data: object;
  toastSuccess: Function;
};

const registerUsers = async ({data, toastSuccess}: Props) => {
 return await axios
    .post("/register", data)
    .then(() => {
      return toastSuccess("Inscription réussi, veuillez vous connecter");
    })
    .catch((err) => console.log(err));
};

export default registerUsers;
