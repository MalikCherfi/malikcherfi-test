import React from "react";
import Container from "../../components/styled-components/Container";
import AuthForm from "../../components/AuthForm";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const connexionStatus = useAppSelector((state) => state.user.isConnected);
  const textColor = useAppSelector((state) => state.color.textColor);

  return (
    <>
      <Container justifyContent="space-evenly" flexDirection="column">
        <h1 style={{ color: textColor }}>Se connecter</h1>
        <AuthForm />
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
      {connexionStatus && <Navigate replace to="/users" />}
    </>
  );
};

export default Login;
