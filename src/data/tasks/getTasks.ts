import axios from "../../helpers/axios.config";

type Props = {
  projectId: string;
  dispatch: Function;
  setTasks: Function;
};

const getProjects = async ({ projectId, dispatch, setTasks }: Props) => {
  return await axios
    .get(`/task/${projectId}`)
    .then((res) => {
      return dispatch(setTasks(res.data));
    })
    .catch((err) => {
      return err;
    });
};

export default getProjects;
