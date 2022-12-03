import { isDivisibleBy } from "./isDivisibleBy";

describe("number.isDivisibleBy", () => {
  it("should return true if number is divisiable by 3", () => {
    expect(isDivisibleBy(-3)(3)).toBe(true);
    expect(isDivisibleBy(0)(3)).toBe(true);
    expect(isDivisibleBy(3)(3)).toBe(true);
  });

  it("should return false if number is not divisiable by 3", () => {
    expect(isDivisibleBy(-4)(3)).toBe(false);
    expect(isDivisibleBy(-2)(3)).toBe(false);
    expect(isDivisibleBy(2)(3)).toBe(false);
    expect(isDivisibleBy(4)(3)).toBe(false);
  });
});

export {};
