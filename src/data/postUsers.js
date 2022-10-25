import axios from "../helpers/axios.config.js";

const postUsers = async (payload) => {
  await axios
    .post("/register", payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export default postUsers;
