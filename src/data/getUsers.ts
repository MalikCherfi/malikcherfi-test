import axios from "../helpers/axios.config";

type Props = {
  dispatch: Function;
  setUsers: Function;
};

const getUsers = async ({ dispatch, setUsers }: Props) => {
  return await axios
    .get("/users")
    .then((res) => {
     return dispatch(setUsers(res.data));
    })
    .catch((err) => {
      return err;
    });
};

export default getUsers;
