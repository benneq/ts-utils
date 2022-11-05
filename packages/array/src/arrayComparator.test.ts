import { numberComparator } from "@benneq/comparator";
import { arrayComparator } from "./arrayComparator";

describe("array.arrayComparator", () => {
  it("should return 1 if the first array has more elements", () => {
    expect(arrayComparator(numberComparator)([0], [])).toBeGreaterThan(0);
    expect(arrayComparator(numberComparator)([1, 2], [1])).toBeGreaterThan(0);
  });

  it("should return 1 if the unequal element of the first array is larger", () => {
    expect(arrayComparator(numberComparator)([1], [0])).toBeGreaterThan(0);
    expect(arrayComparator(numberComparator)([1, 2], [1, 1])).toBeGreaterThan(
      0
    );
  });

  it("should return -1 if the first array has less elements", () => {
    expect(arrayComparator(numberComparator)([], [0])).toBeLessThan(0);
    expect(arrayComparator(numberComparator)([1], [1, 2])).toBeLessThan(0);
  });

  it("should return -1 if the unequal element of the first array is less", () => {
    expect(arrayComparator(numberComparator)([0], [1])).toBeLessThan(0);
    expect(arrayComparator(numberComparator)([1, 1], [1, 2])).toBeLessThan(0);
  });

  it("should return 0 if both arrays contain equal elements in the same order", () => {
    expect(arrayComparator(numberComparator)([], [])).toBe(0);
    expect(arrayComparator(numberComparator)([1], [1])).toBe(0);
    expect(arrayComparator(numberComparator)([1, 2], [1, 2])).toBe(0);
  });
});

export {};
