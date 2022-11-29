import { numberComparator } from "@benneq/comparator";
import { isMonotone } from "./isMonotone";

describe("iterable.isMonotone", () => {
  it("should return true if Iterable is empty", () => {
    expect(isMonotone(numberComparator)([])).toBe(true);
  });

  it("should return true if Iterable contains single element", () => {
    expect(isMonotone(numberComparator)([0])).toBe(true);
  });

  it("should return true if Iterable is sorted", () => {
    expect(isMonotone(numberComparator)([-1, 0, 5])).toBe(true);
  });

  it("should return false if Iterable has duplicate elements", () => {
    expect(isMonotone(numberComparator)([1, 2, 2])).toBe(false);
  });

  it("should return false if Iterable is not sorted", () => {
    expect(isMonotone(numberComparator)([1, 3, 2])).toBe(false);
  });
});

export {};
