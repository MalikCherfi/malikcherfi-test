import axios from "../helpers/axios.config.js";

const loginUsers = async (payload) => {
  await axios
    .post("/login", payload)
    .then((res) => {
      localStorage.setItem("auth_token", res.data);
    })
    .catch((err) => console.log(err));
};

export default loginUsers;
