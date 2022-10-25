import axios from "../helpers/axios.config.js";

const loginUsers = async (payload, dispatch, setUser) => {
  await axios
    .post("/login", payload)
    .then((res) => {
      localStorage.setItem("auth_token", res.data);
      dispatch(setUser(true));
    })
    .catch((err) => console.log(err));
};

export default loginUsers;
