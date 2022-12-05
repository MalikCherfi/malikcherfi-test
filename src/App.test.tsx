import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

describe("render App", () => {
  it("renders learn react link", () => {
    // Arrange
    render(<Provider store={store}><App /></Provider>);
    // Act
    const linkElement = screen.getByText(/learn react/i);
    // Assert
    expect(linkElement).toBeInTheDocument();
    // Salu
  });
});
