import axios from "../helpers/axios.config.js";

const checkUsersAuth = async (token) => {
  await axios
    .get("/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default checkUsersAuth;
