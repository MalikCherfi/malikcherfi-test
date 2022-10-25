import axios from "../helpers/axios.config.js";

const checkUsersAuth = async (token, dispatch, setStatus) => {
  const response = await axios
    .get("/session/user", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => console.log(err));

  if (response) {
    dispatch(setStatus(true));
  }
};

export default checkUsersAuth;
