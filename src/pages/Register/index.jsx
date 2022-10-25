import Container from "../../components/styled-components/Container.js";
import { useForm } from "react-hook-form";
import postUsers from "../../data/postUsers.js";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (payload) => {
    postUsers(payload);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Adresse mail :
          <input
            type="text"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>
        <label>
          Mot de passe :
          <input
            type="text"
            name="password"
            placeholder="Mot de passe"
            {...register("password", { required: true })}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
};

export default Register;
