import axios from "../../helpers/axios.config";

type Props = {
  id: string;
  dispatch: Function;
  setProject: Function;
};

const getProjects = async ({ id, dispatch, setProject }: Props) => {
  return await axios
    .get(`/project/${id}`)
    .then((res) => {
      return dispatch(setProject(res.data));
    })
    .catch((err) => {
      return err;
    });
};

export default getProjects;
