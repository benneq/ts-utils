import { isEven } from "./isEven";

describe("number.isEven", () => {
  it("should return true if number is even", () => {
    expect(isEven(-2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
  });

  it("should return false if number is not even", () => {
    expect(isEven(-1)).toBe(false);
    expect(isEven(1)).toBe(false);
  });
});

export {};
