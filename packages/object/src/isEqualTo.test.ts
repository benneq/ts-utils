import { isEqualTo } from "./isEqualTo";

describe("object.isEqualTo", () => {
  it("should return true if both values are equal", () => {
    const [value] = symbolGenerator();

    expect(isEqualTo(value)(value)).toBe(true);
  });

  it("should return false if both values are not equal", () => {
    const [value1, value2] = symbolGenerator();

    expect(isEqualTo<symbol>(value1)(value2)).toBe(false);
  });
});

export {};
