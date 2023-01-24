import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navigation from "../../layouts/Navigation";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { setStatus, setIsLoading } from "../../app/states/user";

const renderWithContext = (element: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
};

describe("render Navigation", () => {
  it("should render component", () => {
    // Arrange
    const { getByRole } = renderWithContext(<Navigation />);

    // Act
    const linkElement = getByRole("list");

    // Assert
    expect(linkElement).toBeTruthy();
  });

  it("should show text 'Se connecter' when page is loaded and user is not connected", () => {
    // Arrange
    store.dispatch(setIsLoading(false));
    const { getByText } = renderWithContext(<Navigation />);

    // Act
    const linkElement = getByText("Se connecter");

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  it("should show text 'Se déconnecter' when page is loaded and user is connected", () => {
    // Arrange
    store.dispatch(setIsLoading(false));
    store.dispatch(setStatus(true));
    const { queryByText } = renderWithContext(<Navigation />);

    // Act
    const linkElement = queryByText("Se déconnecter");

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  it("should not show connection text when page is not loaded", () => {
    // Arrange
    store.dispatch(setIsLoading(true));
    const { queryByText } = renderWithContext(<Navigation />);

    // Act
    const linkElement = queryByText("Se connecter");

    // Assert
    expect(linkElement).toEqual(null);
  });

  it("should call setItem function on component render", () => {
    // Arrange
    store.dispatch(setIsLoading(false));
    store.dispatch(setStatus(true));
    const setItem = jest.spyOn(Storage.prototype, "setItem");

    const { getByText } = renderWithContext(<Navigation />);

    // Act
    const disconnect = getByText("Se déconnecter");
    fireEvent.click(disconnect);

    // Assert
    expect(setItem).toHaveBeenCalled();
    expect(localStorage.getItem("auth_token")).toEqual("false");
  });
});
