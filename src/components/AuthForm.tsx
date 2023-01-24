import React from "react";
import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setStatus } from "../app/states/user";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import loginUsers from "../data/loginUsers";
import registerUsers from "../data/registerUsers";

type Data = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

const AuthForm = () => {
  // Check if it's register form or login form
  const registerForm = window.location.href.includes("register");
  let buttonTitle = "";
  if (registerForm) {
    buttonTitle = "S'inscrire";
  } else {
    buttonTitle = "Se connecter";
  }

  const color = useAppSelector((state) => state.color.textColor);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Data>();

  const onSubmit = (data: object) => {
    if (registerForm) {
      registerUsers({ data, toastSuccess: toast.success });
    } else {
      loginUsers({
        data,
        dispatch,
        setStatus,
        toastError: toast.error,
      });
    }
  };

  return (
    <FormContainer>
      <Form aria-label="connection-form" onSubmit={handleSubmit(onSubmit)}>
        {registerForm ? (
          <>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label style={{ color: color }}>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Prénom"
                {...register("name", { required: true })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label style={{ color: color }}>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom"
                {...register("lastName", { required: true })}
              />
            </Form.Group>
          </>
        ) : null}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: color }}>Adresse email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: color }}>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mot de passe"
            {...register("password", { required: true })}
          />
        </Form.Group>
        <DivCenter>
          <Button
            style={{ backgroundColor: color, border: "none" }}
            type="submit"
          >
            {buttonTitle}
          </Button>
        </DivCenter>
        {!registerForm ? (
          <DivCenter>
            <p
              style={{
                marginTop: "20px",
                overflowWrap: "break-word",
                textAlign: "center",
                color: color,
              }}
            >
              Vous n'êtes pas encore inscrit ?
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
        ) : null}
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
