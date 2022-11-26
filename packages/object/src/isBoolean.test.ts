import { isBoolean } from "./isBoolean";

describe("object.isBoolean", () => {
  it("should return false if the provided value is not boolean", () => {
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean("")).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(new Set())).toBe(false);
    expect(isBoolean(new Map())).toBe(false);
    expect(isBoolean(jest.fn())).toBe(false);
  });

  it("should return true if the provided value is boolean", () => {
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(true)).toBe(true);
  });
});

export {};
