import React from "react";
import AuthForm from "../../components/AuthForm";
import loginUsers from "../../data/loginUsers";
import registerUsers from "../../data/registerUsers";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";

const renderWithContext = (element: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
};

jest.mock("../../data/loginUsers");
jest.mock("../../data/registerUsers");

describe("render AuthForm", () => {
  const { location } = window;

  beforeAll((): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    delete window.location;
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    window.location = {
      href: "",
    };
  });

  afterAll((): void => {
    window.location = location;
  });

  it("render loginForm when location href is not register", () => {
    // Arrange
    const target = "http://localhost/login";
    window.location.href = target;
    const { queryByText } = renderWithContext(<AuthForm />);

    // Act
    const element = queryByText("Prénom");

    // Assert
    expect(element).toEqual(null);
  });

  it("render registerForm when location href is register", () => {
    // Arrange
    const target = "http://localhost/register";
    window.location.href = target;

    const { queryByText } = renderWithContext(<AuthForm />);

    // Act
    const element = queryByText("Prénom");

    // Assert
    expect(window.location.href).toContain("register");
    expect(element?.textContent).toEqual("Prénom");
  });

  it("call loginUser function on submit when location href is not register", async () => {
    // Arrange
    const target = "http://localhost/login";
    window.location.href = target;

    const { getByRole, getByLabelText } = renderWithContext(<AuthForm />);

    // Act
    const form = getByRole("form");
    fireEvent.input(getByRole("textbox", { name: /email/i }), {
      target: {
        value: "malikcherfi@gmail.com",
      },
    });

    fireEvent.input(getByLabelText("Mot de passe"), {
      target: { value: "test" },
    });

    fireEvent.submit(form);

    // Assert

    await waitFor(() => {
      expect(loginUsers).toHaveBeenCalledTimes(1);
    });
  });

  it("call registerUser function on submit when location href is register", async () => {
    // Arrange
    const target = "http://localhost/register";
    window.location.href = target;

    const { getByRole, getByLabelText } = renderWithContext(<AuthForm />);

    // Act
    const form = getByRole("form");

    fireEvent.input(getByRole("textbox", { name: "Prénom" }), {
      target: {
        value: "malik",
      },
    });
    fireEvent.input(getByRole("textbox", { name: "Nom" }), {
      target: {
        value: "cherfi",
      },
    });
    fireEvent.input(getByRole("textbox", { name: /email/i }), {
      target: {
        value: "malikcherfi@gmail.com",
      },
    });
    fireEvent.input(getByLabelText("Mot de passe"), {
      target: { value: "test" },
    });

    fireEvent.submit(form);

    // Assert
    await waitFor(() => {
      expect(registerUsers).toHaveBeenCalledTimes(1);
    });
  });
});
