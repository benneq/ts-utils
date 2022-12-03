import { isOdd } from "./isOdd";

describe("number.isOdd", () => {
  it("should return true if number is odd", () => {
    expect(isOdd(-1)).toBe(true);
    expect(isOdd(1)).toBe(true);
  });

  it("should return false if number is not odd", () => {
    expect(isOdd(-2)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
  });
});

export {};
