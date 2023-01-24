import checkUsersAuth from "../../data/checkUsersAuth";
import helperAxios from "../../helpers/axios.config";
import axios from "axios";
import { setStatus } from "../../app/states/user";
import { useDispatch } from "react-redux";
import { store } from "../../app/store";

// https://stackoverflow.com/questions/68200193/how-to-test-failed-request-with-axios-jest

jest.mock("../../helpers/axios.config");

const mockedAxios = helperAxios as jest.Mocked<typeof axios>;

const dispatch = store.dispatch

describe("checkUsersAuth", () => {
  it("fetches successfully data from an API", async () => {
    // Arrange
    const token = "zffiyzrzfuyrurrureveruvre";
    mockedAxios.get.mockResolvedValue({ data: [{ email: "malik@hotmail.fr" }] });

    // Act
    const result = await checkUsersAuth({ token, dispatch, setStatus });

    // Assert
    expect(result).toEqual({"payload": true, "type": "user/setStatus"});
    expect(mockedAxios.get).toHaveBeenCalledWith("session/user", {
      headers: { authorization: "Bearer zffiyzrzfuyrurrureveruvre" },
    });
  });

  it("throws an error when incorrect data is passed", async () => {
    // Arrange
    const token = "zffiyzrzfuyrurrureveruvre";
    mockedAxios.get.mockRejectedValue({ error: "some error" });

    // Act
    const result = await checkUsersAuth({ token, dispatch, setStatus });

    // Assert
    expect(result).toEqual({ error: "some error" });
  });
});
