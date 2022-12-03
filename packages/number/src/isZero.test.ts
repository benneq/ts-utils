import { isZero } from "./isZero";

describe("number.isZero", () => {
  it("should return true if number is 0", () => {
    expect(isZero(0)).toBe(true);
  });

  it("should return false if number is not 0", () => {
    expect(isZero(-1)).toBe(false);
    expect(isZero(1)).toBe(false);
  });
});

export {};
