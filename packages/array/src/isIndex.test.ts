import { isIndex } from "./isIndex";

describe("array.isIndex", () => {
  it("should return true if the given index is in bounds of the Array", () => {
    const array = [1, 2, 3];

    expect(isIndex(0)(array)).toBe(true);
    expect(isIndex(1)(array)).toBe(true);
    expect(isIndex(2)(array)).toBe(true);
  });

  it("should return false if the Array is empty", () => {
    const array: unknown[] = [];

    expect(isIndex(-1)(array)).toBe(false);
    expect(isIndex(0)(array)).toBe(false);
    expect(isIndex(1)(array)).toBe(false);
  });

  it("should return false if the given index is out of bounds of the Array", () => {
    const array = [1, 2, 3];

    expect(isIndex(-1)(array)).toBe(false);
    expect(isIndex(3)(array)).toBe(false);
  });

  it("should work with Strings", () => {
    expect(isIndex(-1)("")).toBe(false);
    expect(isIndex(1)("")).toBe(false);
    expect(isIndex(-1)("abc")).toBe(false);
    expect(isIndex(1)("abc")).toBe(true);
  });
});

export {};
