import axios from "../../helpers/axios.config";

type Props = {
  id: string;
  toastSuccess: Function;
};

const deleteProjects = async ({ id, toastSuccess }: Props) => {
  return await axios
    .delete(`/project/${id}`)
    .then(() => {
      return toastSuccess("Projet supprimé avec succès");
    })
    .catch((err) => {
      return err;
    });
};

export default deleteProjects;
