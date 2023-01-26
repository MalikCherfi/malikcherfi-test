import axios from "../../helpers/axios.config";

type Props = {
  id: object;
};

const deleteTasks = async ({ id }: Props) => {
  return await axios
    .delete(`/task/${id}`)
    .then(() => {
      console.log("tache supprimé avec succès");
    })
    .catch((err) => {
      return err;
    });
};

export default deleteTasks;