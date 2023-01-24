import axios from "../helpers/axios.config";

type Props = {
  data: object;
  dispatch: Function;
  setStatus: Function;
  toastError: Function;
};

const loginUsers = async ({ data, dispatch, setStatus, toastError }: Props) => {
  return await axios
    .post("/login", data)
    .then((res) => {
      return (localStorage.setItem("auth_token", res.data),
        setTimeout(() => dispatch(setStatus(true)), 300)
      );
    })
    .catch(() => {
      return toastError("Email ou mot de passe incorrect");
    });
};

export default loginUsers;
