import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import Login from "../../pages/Login/index";
import Home from "../../pages/Home";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { setStatus } from "../../app/states/user";

const renderWithContext = (element: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
};

describe("render Login", () => {
  it("should render component when user is not connected", () => {
    // Arrange
    store.dispatch(setStatus(false));
    const { getByRole } = renderWithContext(<Login />);

    // Act
    const linkElement = getByRole("heading");

    // Assert
    expect(linkElement).toBeTruthy();
  });

  // it("should show news intially ", async () => {
  //   const result = renderWithContext(<Login />);
    
  //   store.dispatch(setStatus(true));
  //   //  const result = renderWithContext(<Login />);

  //   expect(window.location.pathname).toBe("/about");
  // });
});
