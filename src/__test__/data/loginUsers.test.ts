import loginUsers from "../../data/loginUsers";
import helperAxios from "../../helpers/axios.config";
import axios from "axios";
import { store } from "../../app/store";
import { setStatus } from "../../app/states/user";
import { toast } from "react-toastify";

jest.mock("../../helpers/axios.config");

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
  },
}));

const mockedAxios = helperAxios as jest.Mocked<typeof axios>;

const dispatch = store.dispatch;
const toastError = toast.error;

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

const data = [{ email: "malikcherfi@gmail.com", password: "password" }];

describe("loginUsers", () => {
  it("fetches successfully data from an API", async () => {
    // Arrange
    mockedAxios.post.mockResolvedValue({
      data: "token",
    });

    // Act
    await loginUsers({ data, dispatch, setStatus, toastError });

    const state = store.getState();

    // Assert
    expect(localStorage.getItem("auth_token")).toEqual("token");

    expect(mockedAxios.post).toHaveBeenCalledWith("/login", [
      { email: "malikcherfi@gmail.com", password: "password" },
    ]);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(state["user"]["isConnected"]).toBe(true);
  });

  it("throws an error when incorrect data is passed", async () => {
    // Arrange
    mockedAxios.post.mockRejectedValue({
      error: "Email ou mot de passe incorrect",
    });

    // Act
    await loginUsers({ data, dispatch, setStatus, toastError });

    // Assert
    expect(toastError).toHaveBeenCalledWith("Email ou mot de passe incorrect");
  });
});
