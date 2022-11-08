import axios from "../helpers/axios.config";

type Props = {
  data: object;
  dispatch: Function;
  setStatus: Function;
  toastError: Function;
};

const loginUsers = async ({ data, dispatch, setStatus, toastError }: Props) => {
  await axios
    .post("/login", data)
    .then((res) => {
      localStorage.setItem("auth_token", res.data);
      setTimeout(() => dispatch(setStatus(true)), 300);
    })
    .catch((err) => toastError("Email ou mot de passe incorrect"));
};

export default loginUsers;
