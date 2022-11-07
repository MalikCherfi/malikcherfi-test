import axios from "../helpers/axios.config";

type Props = {
  data: object;
  dispatch: Function;
  setStatus: Function;
  toast: Function;
};

const loginUsers = async ({ data, dispatch, setStatus, toast }: Props) => {
  await axios
    .post("/login", data)
    .then((res) => {
      localStorage.setItem("auth_token", res.data);
      setTimeout(() => dispatch(setStatus(true)), 300);
    })
    .catch((err) => toast("Email ou mot de passe incorrect"));
};

export default loginUsers;
