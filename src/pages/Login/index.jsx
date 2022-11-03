import Container from "../../components/styled-components/Container";
import AuthForm from "../../components/AuthForm.jsx";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import loginUsers from "../../data/loginUsers.js";
import { setStatus } from "../../app/states/user.ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const connexionStatus = useSelector((state) => state.user.isConnected);
  const color = useSelector((state) => state.color.color);

  const onSubmit = (payload) => {
    loginUsers(payload, dispatch, setStatus, toast);
  };

  return (
    <>
      <Container>
        <h1 style={{ color: color }}>Se connecter</h1>
        <AuthForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
        />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Container>
      {connexionStatus && <Navigate replace to="/" />}
    </>
  );
};

export default Login;
