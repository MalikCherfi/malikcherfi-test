import axios from "../../helpers/axios.config";

type Props = {
  dispatch: Function;
  setProjects: Function;
};

const getProjects = async ({ dispatch, setProjects }: Props) => {
  return await axios
    .get("/projects")
    .then((res) => {
      return dispatch(setProjects(res.data));
    })
    .catch((err) => {
      return err;
    });
};

export default getProjects;
