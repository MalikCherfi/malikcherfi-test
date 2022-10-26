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
      dispatch(setIsLoading(false));
    })
    .catch((err) => console.log(err));
};

export default checkUsersAuth;
