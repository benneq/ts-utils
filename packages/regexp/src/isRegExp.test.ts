import { isRegExp } from "./isRegExp";

describe("object.isRegExp", () => {
  it("should return false if the provided value is not RegExp", () => {
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(NaN)).toBe(false);
    expect(isRegExp(0)).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp("")).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp(new Set())).toBe(false);
    expect(isRegExp(new Map())).toBe(false);
    expect(isRegExp(jest.fn())).toBe(false);
    expect(isRegExp(true)).toBe(false);
  });

  it("should return true if the provided value is RegExp", () => {
    expect(isRegExp(/./)).toBe(true);
    expect(isRegExp(new RegExp(""))).toBe(true);
  });
});

export {};
