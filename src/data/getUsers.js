import axios from "../helpers/axios.config.js";

const getUsers = async (dispatch, setUsers) => {
  await axios
    .get("/users")
    .then((res) => {
      dispatch(setUsers(res.data));
    })
    .catch((err) => console.log(err));
};

export default getUsers;
