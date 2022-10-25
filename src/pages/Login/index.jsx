import Container from "../../components/styled-components/Container.js";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import loginUsers from "../../data/loginUsers.js";
import { setStatus } from "../../app/states/user.js";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const connexionStatus = useSelector((state) => state.user.isConnected);

  const onSubmit = (payload) => {
    loginUsers(payload, dispatch, setStatus);
  };

  return (
    <>
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
      {connexionStatus && <Navigate replace to="/" />}
    </>
  );
};

export default Login;
