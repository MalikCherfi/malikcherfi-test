import axios from "../helpers/axios.config.js";

const checkUsersAuth = async (token, dispatch, setUser) => {
  const response = await axios
    .get("/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => console.log(err));

  if (response) {
    dispatch(setUser(true));
  }
};

export default checkUsersAuth;
