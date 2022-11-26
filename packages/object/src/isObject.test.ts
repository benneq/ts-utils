import { isObject } from "./isObject";

describe("object.isObject", () => {
  it("should return false if the provided value is not an object", () => {
    expect(isObject(undefined)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject("")).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(jest.fn())).toBe(false);
  });

  it("should return true if the provided value is an object", () => {
    expect(isObject({})).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new Set())).toBe(true);
    expect(isObject(new Map())).toBe(true);
  });
});

export {};
