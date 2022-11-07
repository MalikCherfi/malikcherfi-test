import axios from "../helpers/axios.config.ts";

const checkUsersAuth = (token, dispatch, setStatus, setIsLoading) => {
  axios
    .get("/session/user", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data)
      dispatch(setStatus(true));
    })
    .catch((err) => console.log(err));

  dispatch(setIsLoading(false));
};

export default checkUsersAuth;
