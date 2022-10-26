import Container from "../../components/styled-components/Container.js";
import AuthForm from "../../components/AuthForm.jsx";
import { Navigate } from "react-router-dom";
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
        <h1>Se connecter</h1>
        <AuthForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
        />
      </Container>
      {connexionStatus && <Navigate replace to="/" />}
    </>
  );
};

export default Login;
