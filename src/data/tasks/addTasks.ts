import axios from "../../helpers/axios.config";

type Props = {
  payload: object;
  toastSuccess: Function;
};

const addTasks = async ({payload, toastSuccess}: Props) => {
 return await axios
    .post("/task", payload)
    .then(() => {
      return toastSuccess("tache ajouté avec succès");
    })
    .catch((err) => console.log(err));
};

export default addTasks;