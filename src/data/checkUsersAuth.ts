import axios from "../helpers/axios.config";

type Props = {
  token: string;
  dispatch: Function;
  setStatus: Function;
};

const checkUsersAuth = async ({ token, dispatch, setStatus }: Props) => {
  return await axios
    .get("session/user", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data, dispatch(setStatus(true));
    })
    .catch((err) => {
      return err;
    });
};

export default checkUsersAuth;
