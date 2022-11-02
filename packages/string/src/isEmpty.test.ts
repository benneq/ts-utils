import { isEmpty } from "./isEmpty";

describe("string.isEmpty", () => {
  it("should return true if the String has no characters", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("should return false if the String has characters", () => {
    expect(isEmpty(" ")).toBe(false);
  });
});

export {};
