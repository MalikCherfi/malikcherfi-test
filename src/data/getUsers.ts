import axios from "../helpers/axios.config";

type Props = {
  dispatch: Function;
  setUsers: Function;
};

const getUsers = async ({dispatch, setUsers}: Props) => {
  await axios
    .get("/users")
    .then((res) => {
      dispatch(setUsers(res.data));
    })
    .catch((err) => console.log(err));
};

export default getUsers;
