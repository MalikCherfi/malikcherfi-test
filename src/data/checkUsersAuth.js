import axios from "../helpers/axios.config.js";

const checkUsersAuth = async (token, dispatch, setStatus, setIsLoading) => {
  await axios
    .get("/session/user", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      dispatch(setStatus(true));
    })
    .catch((err) => console.log(err));

  dispatch(setIsLoading(false));
};

export default checkUsersAuth;
