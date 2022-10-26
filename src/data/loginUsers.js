import axios from "../helpers/axios.config.js";

const loginUsers = async (payload, dispatch, setStatus, toast) => {
  await axios
    .post("/login", payload)
    .then((res) => {
      localStorage.setItem("auth_token", res.data);
      setTimeout(() => dispatch(setStatus(true)), 300);
    })
    .catch((err) => toast.error("Email ou mot de passe incorrect"));
};

export default loginUsers;
