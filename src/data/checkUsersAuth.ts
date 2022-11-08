import axios from "../helpers/axios.config";

type Props = {
  token: string;
  dispatch: Function;
  setStatus: Function;
  setIsLoading: Function;
};

const checkUsersAuth = ({
  token,
  dispatch,
  setStatus,
  setIsLoading,
}: Props) => {
  axios
    .get("/session/user", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch(setStatus(true));
    })
    .catch((err) => console.log(err));

  dispatch(setIsLoading(false));
};

export default checkUsersAuth;
