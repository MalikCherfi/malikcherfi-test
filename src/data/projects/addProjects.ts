import axios from "../../helpers/axios.config";

type Props = {
  payload: object;
  toastSuccess: Function;
};

const addProjects = async ({payload, toastSuccess}: Props) => {
 return await axios
    .post("/project", payload)
    .then(() => {
      return toastSuccess("Projet ajouté avec succès");
    })
    .catch((err) => console.log(err));
};

export default addProjects;