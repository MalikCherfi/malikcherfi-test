import Container from "../../components/styled-components/Container.js";
import AuthForm from "../../components/AuthForm.jsx";
import { useForm } from "react-hook-form";
import registerUsers from "../../data/registerUsers.js";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (payload) => {
    registerUsers(payload);
  };

  return (
    <Container>
      <h1>Créer un compte</h1>
      <AuthForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
    </Container>
  );
};

export default Register;
