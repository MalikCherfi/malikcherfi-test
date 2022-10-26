import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AuthForm = ({ handleSubmit, onSubmit, register }) => {
  // Check if it's regiter form or login form
  const registerForm = document.location.href.includes("register");
  let buttonTitle = "";
  if (document.location.href.includes("register")) {
    buttonTitle = "S'inscrire";
  } else {
    buttonTitle = "Se connecter";
  }

  const color = useSelector((state) => state.color.color);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {registerForm && (
          <>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label style={{ color: color }}>Prénom</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Prénom"
                {...register("name", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label style={{ color: color }}>Nom</Form.Label>
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
          <Form.Label style={{ color: color }}>Adresse email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: color }}>Mot de passe</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Mot de passe"
            {...register("password", { required: true })}
          />
        </Form.Group>
        <DivCenter>
          <Button style={{ backgroundColor: color }} type="submit">
            {buttonTitle}
          </Button>
        </DivCenter>
        {!registerForm && (
          <DivCenter>
            <p
              style={{
                marginTop: "20px",
                overflowWrap: "break-word",
                textAlign: "center",
                color: color,
              }}
            >
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
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const DivCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AuthForm;
