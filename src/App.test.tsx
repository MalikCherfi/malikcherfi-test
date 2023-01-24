import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import App from "./App";
import randomColors from "./utils/color";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import userReducer, { setStatus, setIsLoading } from "./app/states/user";

afterEach(cleanup)

const renderWithContext = (element: React.ReactElement) => {
  return render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
};


describe("render App", () => {
  // it("should show text when user is not connected",() => {
  //   // Arrange
  //   store.dispatch(setIsLoading(false));
  //   store.dispatch(setStatus(false));
  //   const { getByText } = renderWithContext(<App />);
  //   // Act
  //   const linkElement =  getByText(
  //     "Vous devez vous connecter pour accéder à la liste des utilisateurs"
  //   );
  //   // Assert
  //   expect(linkElement).toBeInTheDocument();
  // });

  // it("should not show text when user is connected", () => {
  //   // Arrange
  //   store.dispatch(setIsLoading(false));
  //   store.dispatch(setStatus(true));
  //   const { queryByRole } = renderWithContext(<App />);

  //   // Act
  //   const isNotConnected = queryByRole("heading");

  //   // Assert
  //   expect(isNotConnected).toBe(null);
  // });

  it("should render components when page is loaded", () => {
    // Arrange
    store.dispatch(setStatus(false));
    const { getByRole } = renderWithContext(<App />);

    // Act
    const textIsLoaded = getByRole("heading");

    // Assert
    expect(textIsLoaded).toBeTruthy();
  });

  // it("should not render components when page is not loaded", () => {
  //   // Arrange
  //   store.dispatch(setIsLoading(true));

  //   store.dispatch(setStatus(true));
  //   // const { queryByRole } = renderWithContext(<App />);
  //   // const result = renderWithContext(<App />)


    
  //   //  result.debug()
  //     // Act
  //     const textIsLoaded = screen.queryByRole("heading");
  //     // Assert
  //     expect(textIsLoaded).toBe("fzef");
  
  // });

  // it("should call getItem function on component render", () => {
  //   const getItem = jest.spyOn(Storage.prototype, "getItem");

  //   renderWithContext(<App />);

  //   expect(getItem).toHaveBeenCalled();
  // });

  // it("background-color should be equal to first random color", () => {
  //   const result = renderWithContext(<App />);

  //   const MyHeaderRoots = result.container.querySelector("#background")!;
  //   const style = window.getComputedStyle(MyHeaderRoots);

  //   expect(style.getPropertyValue("background-color")).toEqual(randomColors[0]);

  //   fireEvent.click(MyHeaderRoots);

  //   expect(style.getPropertyValue("background-color")).toEqual(randomColors[1]);
  // });
});
