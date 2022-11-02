import { isNullish } from "./isNullish";

describe("object.isNullish", () => {
  it("should return true if the provided value is nullish", () => {
    expect(isNullish(undefined)).toBe(true);
    expect(isNullish(null)).toBe(true);
  });

  it("should return true if the provided value is nullish", () => {
    expect(isNullish(false)).toBe(false);
    expect(isNullish("")).toBe(false);
    expect(isNullish(0)).toBe(false);
    expect(isNullish(NaN)).toBe(false);
    expect(isNullish(true)).toBe(false);
    expect(isNullish(" ")).toBe(false);
    expect(isNullish(1)).toBe(false);
    expect(isNullish(-1)).toBe(false);
    expect(isNullish({})).toBe(false);
    expect(isNullish([])).toBe(false);
  });
});

export {};
