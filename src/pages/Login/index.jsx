import Container from "../../components/styled-components/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
