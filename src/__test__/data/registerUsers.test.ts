import registerUsers from "../../data/registerUsers";
import helperAxios from "../../helpers/axios.config";
import axios from "axios";
import { toast } from "react-toastify";

jest.mock("../../helpers/axios.config");

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

const mockedAxios = helperAxios as jest.Mocked<typeof axios>;

const toastSuccess = toast.success;

describe("registerUsers", () => {
  it("fetches successfully data from an API", async () => {
    // Arrange
    const payload = [
      {
        email: "malikcherfi@gmail.com",
        password: "password",
        creationDate: "02/03/2023",
      },
    ];
    mockedAxios.post.mockResolvedValue({
      data: [{ email: "malikcherfi@gmail.com", password: "password" }],
    });
    // Act
    await registerUsers({ payload, toastSuccess });

    // Assert
    expect(mockedAxios.post).toHaveBeenCalledWith("/register", [
      { email: "malikcherfi@gmail.com", password: "password" },
    ]);
    expect(toastSuccess).toHaveBeenCalledWith(
      "Inscription réussi, veuillez vous connecter"
    );
  });

  it("throws an error when incorrect data is passed", async () => {
    // Arrange
    const payload = [
      {
        email: "malikcherfi@gmail.com",
        password: "password",
        creationDate: "02/03/2023",
      },
    ];
    mockedAxios.post.mockRejectedValue({
      error: "some error",
    });
    jest.spyOn(global.console, "log");

    // Act
    await registerUsers({ payload, toastSuccess });

    // Assert
    expect(console.log).toHaveBeenCalledWith({
      error: "some error",
    });
  });
});
