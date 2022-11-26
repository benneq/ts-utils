import { isDistinct } from "./isDistinct";

describe("iterable.isDistinct", () => {
  it("should return true if the Iterable is empty", () => {
    expect(isDistinct()([])).toBe(true);
  });

  it("should return true if all values are distinct", () => {
    expect(isDistinct()([1, 3, 2, 0])).toBe(true);
  });

  it("should return false if there are duplicate values", () => {
    expect(isDistinct()([1, 3, 2, 2, 0])).toBe(false);
  });

  it("should use the keyExtractor", () => {
    expect(isDistinct<number>((n) => n % 2)([2, 4])).toBe(false);
  });
});

export {};
