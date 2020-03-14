import { get, post } from "./api";

describe("api", () => {
  test("should provide get method to make http get request", () => {
    expect(get).toBeDefined();
  });
  test("should provide post method to make http post request", () => {
    expect(post).toBeDefined();
  });
});
