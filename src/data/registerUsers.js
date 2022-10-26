import axios from "../helpers/axios.config.js";

const registerUsers = async (payload, toast) => {
  await axios
    .post("/register", payload)
    .then(() => {
      toast.success("Inscription réussi, veuillez vous connecter");
    })
    .catch((err) => console.log(err));
};

export default registerUsers;
