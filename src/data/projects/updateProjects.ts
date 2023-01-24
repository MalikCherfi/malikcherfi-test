import axios from "../../helpers/axios.config";

type Props = {
    id: string;
  payload: object;
  toastSuccess: Function;
};

const updateProjects = async ({ id, payload, toastSuccess }: Props) => {
  return await axios
    .put(`/project/${id}`, payload)
    .then(() => {
      return toastSuccess("Projet modifié avec succès");
    })
    .catch((err) => {
      return err;
    });
};

export default updateProjects;
