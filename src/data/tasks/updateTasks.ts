import axios from "../../helpers/axios.config";

type Props = {
  id: string;
  payload: object;
  toastSuccess: Function;
};

const updateTasks = async ({ id, payload, toastSuccess }: Props) => {
  return await axios
    .put(`/task/${id}`, payload)
    .then(() => {
      return toastSuccess("Tache modifié avec succès");
    })
    .catch((err) => {
      return err;
    });
};

export default updateTasks;
