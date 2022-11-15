import { isNegative } from "./isNegative";

describe("number.isPositive", () => {
  it("should return true if number is less than 0", () => {
    expect(isNegative(-1)).toBe(true);
  });

  it("should return false if number is zero", () => {
    expect(isNegative(0)).toBe(false);
  });

  it("should return false if number is greater than zero", () => {
    expect(isNegative(1)).toBe(false);
  });
});

export {};
