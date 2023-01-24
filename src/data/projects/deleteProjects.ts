import axios from "../../helpers/axios.config";

type Props = {
  id: string;
  toastSuccess: Function;
};

const getProjects = async ({ id, toastSuccess }: Props) => {
  return await axios
    .delete(`/project/${id}`)
    .then(() => {
      return toastSuccess("Projet supprimé avec succès");
    })
    .catch((err) => {
      return err;
    });
};

export default getProjects;
