import Container from "../../components/styled-components/Container.js";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginUsers from "../../data/loginUsers.js";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (payload) => {
    loginUsers(payload);
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
      <div>
        <p>Vous n'etes pas inscrit ?</p>
        <p>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
