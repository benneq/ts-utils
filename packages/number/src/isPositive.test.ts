import { isPositive } from "./isPositive";

describe("number.isPositive", () => {
  it("should return true if number is greater than 0", () => {
    expect(isPositive(1)).toBe(true);
  });

  it("should return false if number is zero", () => {
    expect(isPositive(0)).toBe(false);
  });

  it("should return false if number is less than zero", () => {
    expect(isPositive(-1)).toBe(false);
  });
});

export {};
