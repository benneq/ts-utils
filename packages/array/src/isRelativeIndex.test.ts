import { isRelativeIndex } from "./isRelativeIndex";

describe("array.isRelativeIndex", () => {
  it("should return true if the given index is in bounds of the Array", () => {
    const array = [1, 2, 3];

    expect(isRelativeIndex(0)(array)).toBe(true);
    expect(isRelativeIndex(1)(array)).toBe(true);
    expect(isRelativeIndex(2)(array)).toBe(true);
  });

  it("should return true if the given index is in negative bounds of the Array", () => {
    const array = [1, 2, 3];

    expect(isRelativeIndex(-1)(array)).toBe(true);
    expect(isRelativeIndex(-2)(array)).toBe(true);
    expect(isRelativeIndex(-3)(array)).toBe(true);
  });

  it("should return false if the Array is empty", () => {
    const array: unknown[] = [];

    expect(isRelativeIndex(-1)(array)).toBe(false);
    expect(isRelativeIndex(0)(array)).toBe(false);
    expect(isRelativeIndex(1)(array)).toBe(false);
  });

  it("should return false if the given index is out of bounds of the Array", () => {
    const array = [1, 2, 3];

    expect(isRelativeIndex(-4)(array)).toBe(false);
    expect(isRelativeIndex(3)(array)).toBe(false);
  });

  it("should work with Strings", () => {
    expect(isRelativeIndex(-1)("")).toBe(false);
    expect(isRelativeIndex(1)("")).toBe(false);
    expect(isRelativeIndex(-1)("abc")).toBe(true);
    expect(isRelativeIndex(1)("abc")).toBe(true);
  });
});

export {};
