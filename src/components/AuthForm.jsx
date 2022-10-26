import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AuthForm = ({ handleSubmit, onSubmit, register }) => {
  const registerForm = document.location.href.includes("register");
  let buttonTitle = "";
  if (document.location.href.includes("register")) {
    buttonTitle = "S'inscrire";
  } else {
    buttonTitle = "Se connecter";
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {registerForm && (
          <>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Prénom"
                {...register("name", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Nom"
                {...register("lastName", { required: true })}
              />
            </Form.Group>
          </>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Mot de passe"
            {...register("password", { required: true })}
          />
        </Form.Group>
        <DivCenter>
          <Button variant="primary" type="submit">
            {buttonTitle}
          </Button>
        </DivCenter>
        {!registerForm && (
          <DivCenter>
            <p style={{ marginTop: "20px", overflowWrap: "break-word" }}>
              Vous n'etes pas encore inscrit ?
            </p>
            <p>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Créer un compte
              </Link>
            </p>
          </DivCenter>
        )}
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 25%;
  height: 400px;
`;

const DivCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AuthForm;
