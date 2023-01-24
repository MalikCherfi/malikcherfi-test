import userReducer, {
  setStatus,
  setUsers,
  setIsLoading,
} from "../../app/states/user";

describe("userReducer", () => {
  it("should return initial state when get empty action ", () => {
    // Arrange
    const initialState = undefined;
    const action = { type: "" };

    // Act
    const result = userReducer(initialState, action);

    // Assert
    expect(result).toEqual({
      isLoading: true,
      isConnected: false,
      users: [],
    });
  });
  it("should convert state with the payload of the action", () => {
    // Arrange
    const initialState = undefined;
    const actions = [
      {
        action: setStatus(true),
        state: "isConnected",
        value: true,
      },
      {
        action: setUsers([{ ok: "deqfe" }]),
        state: "users",
        value: [{ ok: "deqfe" }],
      },
      {
        action: setIsLoading(false),
        state: "isLoading",
        value: false,
      },
    ];

    actions.map((action) => {
      const state = action["state"];
      // Act
      const result = userReducer(initialState, action["action"]);

      // Assert
      expect(result[state as keyof typeof result]).toEqual(action["value"]);
    });
  });
});
