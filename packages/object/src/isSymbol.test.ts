import { isSymbol } from "./isSymbol";

describe("object.isSymbol", () => {
  it("should return false if the provided value is not null", () => {
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(NaN)).toBe(false);
    expect(isSymbol(0)).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol("")).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol(new Set())).toBe(false);
    expect(isSymbol(new Map())).toBe(false);
    expect(isSymbol(jest.fn())).toBe(false);
    expect(isSymbol(null)).toBe(false);
  });

  it("should return true if the provided value is null", () => {
    expect(isSymbol(Symbol())).toBe(true);
  });
});

export {};
