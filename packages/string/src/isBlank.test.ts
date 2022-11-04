import { isBlank } from "./isBlank";

describe("string.isBlank", () => {
  it("should return true if the String has no characters", () => {
    expect(isBlank("")).toBe(true);
  });

  it("should return true if the String has only whitespace characters", () => {
    expect(isBlank(" ")).toBe(true);
  });

  it("should return false if the String has non-whitespace characters", () => {
    expect(isBlank(" a ")).toBe(false);
  });
});

export {};
