import { isRelativeIndex } from "./isRelativeIndex";

describe("array.isRelativeIndex", () => {
  it("should return true if the given index is in bounds of the Array", () => {
    const array = [1, 2, 3];

    expect(isRelativeIndex(array)(0)).toBe(true);
    expect(isRelativeIndex(array)(1)).toBe(true);
    expect(isRelativeIndex(array)(2)).toBe(true);
  });

  it("should return true if the given index is in negative bounds of the Array", () => {
    const array = [1, 2, 3];

    expect(isRelativeIndex(array)(-1)).toBe(true);
    expect(isRelativeIndex(array)(-2)).toBe(true);
    expect(isRelativeIndex(array)(-3)).toBe(true);
  });

  it("should return false if the Array is empty", () => {
    const array: unknown[] = [];

    expect(isRelativeIndex(array)(-1)).toBe(false);
    expect(isRelativeIndex(array)(0)).toBe(false);
    expect(isRelativeIndex(array)(1)).toBe(false);
  });

  it("should return false if the given index is out of bounds of the Array", () => {
    const array = [1, 2, 3];

    expect(isRelativeIndex(array)(-4)).toBe(false);
    expect(isRelativeIndex(array)(3)).toBe(false);
  });

  it("should work with Strings", () => {
    expect(isRelativeIndex("")(-1)).toBe(false);
    expect(isRelativeIndex("")(1)).toBe(false);
    expect(isRelativeIndex("abc")(-1)).toBe(true);
    expect(isRelativeIndex("abc")(1)).toBe(true);
  });
});

export {};
