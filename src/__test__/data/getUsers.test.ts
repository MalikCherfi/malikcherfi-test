import getUsers from "../../data/getUsers";
import helperAxios from "../../helpers/axios.config";
import axios from "axios";
import { store } from "../../app/store";
import { setUsers } from "../../app/states/user";

jest.mock("../../helpers/axios.config");

const mockedAxios = helperAxios as jest.Mocked<typeof axios>;

const dispatch = store.dispatch;

describe("getUsers", () => {
  it("fetches successfully data from an API", async () => {
    // Arrange
    mockedAxios.get.mockResolvedValue({
      data: [{ name: "malik" }],
    });

    // Act
    const result = await getUsers({ dispatch, setUsers });

    // Assert
    expect(result).toEqual({
      payload: [{ name: "malik" }],
      type: "user/setUsers",
    });
    expect(mockedAxios.get).toHaveBeenCalledWith("/users");
  });

  it("throws an error when incorrect data is passed", async () => {
    // Arrange
    mockedAxios.get.mockRejectedValue({ error: "some error" });

    // Act
    const result = await getUsers({ dispatch, setUsers });

    // Assert
    expect(result).toEqual({ error: "some error" });
  });
});
