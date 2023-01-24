import React from "react";
import { render } from "@testing-library/react";
import Register from "../../pages/Register/index";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { setTextColor } from "../../app/states/color";

const renderWithContext = (element: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
};

describe("render Register", () => {
  it("should render component", () => {
    // Arrange
    const { getByRole } = renderWithContext(<Register />);

    // Act
    const linkElement = getByRole("heading");

    // Assert
    expect(linkElement).toBeTruthy();
  });

  it("should render component", () => {
    // Arrange
    store.dispatch(setTextColor("rgb(255, 133, 82)"));
    const result = renderWithContext(<Register />);

    // Act
    const titleRegisterForm =
      result.container.querySelector("#create-account")!;
    const style = window.getComputedStyle(titleRegisterForm);

    // Assert
    expect(style.getPropertyValue("color")).toEqual("rgb(255, 133, 82)");
  });
});
