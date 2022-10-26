import Container from "../../components/styled-components/Container.js";
import AuthForm from "../../components/AuthForm.jsx";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import registerUsers from "../../data/registerUsers.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const color = useSelector((state) => state.color.color);

  const onSubmit = (payload) => {
    registerUsers(payload, toast);
  };

  return (
    <Container>
      <h1 style={{ color: color }}>Créer un compte</h1>
      <AuthForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
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
