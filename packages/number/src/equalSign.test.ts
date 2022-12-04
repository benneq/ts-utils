import { equalSign } from "./equalSign";

describe("number.equalSign", () => {
  it("should return true if both numbers have equal sign", () => {
    expect(equalSign(-5)(-2)).toBe(true);
    expect(equalSign(0)(0)).toBe(true);
    expect(equalSign(2)(2)).toBe(true);
  });

  it("should return true for +0 and -0", () => {
    expect(equalSign(+0)(-0)).toBe(true);
    expect(equalSign(-0)(+0)).toBe(true);
  });

  it("should return false if signs are not equal", () => {
    expect(equalSign(2)(-2)).toBe(false);
    expect(equalSign(0)(2)).toBe(false);
    expect(equalSign(-2)(0)).toBe(false);
  });
});

export {};
