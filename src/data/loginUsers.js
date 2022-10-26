import axios from "../helpers/axios.config.js";

const loginUsers = async (payload, dispatch, setStatus, toast) => {
  await axios
    .post("/login", payload)
    .then((res) => {
      localStorage.setItem("auth_token", res.data);
      dispatch(setStatus(true));
    })
    .catch(
      (err) => console.log(err),
      toast.error("Email ou mot de passe incorrect")
    );
};

export default loginUsers;
