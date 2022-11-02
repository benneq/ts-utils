import { jest } from "@jest/globals";
import { isNotNullish } from "./isNotNullish";

describe("object.isNotNullish", () => {
  it("should return true if the provided value is not Nullish", () => {
    expect(isNotNullish(NaN)).toBe(true);
    expect(isNotNullish(0)).toBe(true);
    expect(isNotNullish(true)).toBe(true);
    expect(isNotNullish({})).toBe(true);
    expect(isNotNullish("")).toBe(true);
    expect(isNotNullish([])).toBe(true);
    expect(isNotNullish(new Set())).toBe(true);
    expect(isNotNullish(new Map())).toBe(true);
    expect(isNotNullish(jest.fn())).toBe(true);
  });

  it("should return false if the provided value is null", () => {
    expect(isNotNullish(undefined)).toBe(false);
    expect(isNotNullish(null)).toBe(false);
  });
});

export {};
