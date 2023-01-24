import React from "react";
import CardList from "../../components/CardList";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { setIsLoading, setUsers } from "../../app/states/user";

const renderWithContext = (element: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
};

describe("render AuthForm", () => {
  it("render loginForm when location href is not register", () => {
    // Arrange
    const data = [{ email: "malikcherfi@gmail.com", name: "malik cherfi" }];
    store.dispatch(setUsers(data));
    store.dispatch(setIsLoading(false));
    const state = store.getState();
    const { getByText } = renderWithContext(
      <CardList users={state["user"]["users"]} />
    );

    // Act
    const element = getByText(/gmail/i);

    // Assert
    expect(element).toBeTruthy();
  });
});
