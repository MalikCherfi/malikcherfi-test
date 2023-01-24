import React from "react";
import { render } from "@testing-library/react";
import Users from "../../pages/Users/Users";
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

describe("render Users", () => {
  it("should render component when page is loaded", () => {
    // Arrange
    store.dispatch(setIsLoading(false));
    const { getByText } = renderWithContext(<Users />);

    // Act
    const linkElement = getByText(
      "Vous devez vous connecter pour accéder à la liste des utilisateurs"
    );

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  it("should not render component when page is not loaded", () => {
    // Arrange
    store.dispatch(setIsLoading(true));
    const { queryByText } = renderWithContext(<Users />);

    // Act
    const linkElement = queryByText(
      "Vous devez vous connecter pour accéder à la liste des utilisateurs"
    );

    // Assert
    expect(linkElement).toEqual(null);
  });

  it("should show text when user is not connected", () => {
    // Arrange
    store.dispatch(setIsLoading(false));
    store.dispatch(setStatus(false));
    const { queryByText } = renderWithContext(<Users />);

    // Act
    const linkElement = queryByText(
      "Vous devez vous connecter pour accéder à la liste des utilisateurs"
    );

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  it("should not show text when user is connected", () => {
    // Arrange
    store.dispatch(setIsLoading(false));
    store.dispatch(setStatus(true));
    const { queryByText } = renderWithContext(<Users />);

    // Act
    const linkElement = queryByText(
      "Vous devez vous connecter pour accéder à la liste des utilisateurs"
    );

    // Assert
    expect(linkElement).toEqual(null);
  });
});
