import React from "react";
import Container from "../../components/styled-components/Container";
import AuthForm from "../../components/AuthForm";
import { useAppSelector } from "../../app/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const textColor = useAppSelector((state) => state.color.textColor);

  return (
    <Container justifyContent="space-evenly" flexDirection="column">
      <h1 id="create-account" style={{ color: textColor }}>Créer un compte</h1>
      <AuthForm />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
};

export default Register;
