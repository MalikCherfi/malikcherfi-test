import colorReducer, { setTextColor } from "../../app/states/color";

describe("userReducer", () => {
  it("should return initial state when get empty action ", () => {
    // Arrange
    const initialState = undefined;
    const action = { type: "" };

    // Act
    const result = colorReducer(initialState, action);

    // Assert
    expect(result).toEqual({
      textColor: "rgb(57, 57, 58)",
      cardColor: "rgb(255, 133, 82)"
    });
  });

  it("should convert state with the payload of the action", () => {
    // Arrange
    const initialState = undefined;
    const action = setTextColor("rgb(56, 59, 57)");

    // Act
    const result = colorReducer(initialState, action);

    // Assert
    expect(result.textColor).toEqual("rgb(56, 59, 57)");
  });
});
