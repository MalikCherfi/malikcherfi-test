import React from "react";
import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setProjects } from "../app/states/project";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { toast } from "react-toastify";
import addProjects from "../data/projects/addProjects";
import updateProjects from "../data/projects/updateProjects";

type Data = {
  name: string;
  creationDate: Date;
  description: string;
  beginningDate: Date;
  endDate: Date;
};

type Props = {
  categoryForm: string;
  id: string;
};

const AddProjectForm = ({ categoryForm, id }: Props) => {
  const color = useAppSelector((state) => state.color.textColor);
  const { register, handleSubmit } = useForm<Data>();

  const date = new Date();

  const onSubmit = (data: object) => {
    const payload = {
      ...data,
      creationDate: date.toDateString(),
    };

    categoryForm == "add"
      ? addProjects({
          payload,

          toastSuccess: toast.success,
        })
      : updateProjects({ id, payload, toastSuccess: toast.success });
  };

  return (
    <FormContainer>
      <Form aria-label="connection-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: color }}>Nom</Form.Label>
          <Form.Control
            type="name"
            placeholder="Nom"
            {...register("name", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: color }}>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: color }}>Date de début</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date de début"
            {...register("beginningDate", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: color }}>Date de fin</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date de fin"
            {...register("endDate", { required: true })}
          />
        </Form.Group>
        <DivCenter>
          {categoryForm == "add" ? (
            <Button
              style={{ backgroundColor: color, border: "none" }}
              type="submit"
            >
              Ajouter
            </Button>
          ) : null}
          {categoryForm == "modify" ? (
            <Button
              style={{ backgroundColor: color, border: "none" }}
              type="submit"
            >
              Modifier
            </Button>
          ) : null}
        </DivCenter>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const DivCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AddProjectForm;
