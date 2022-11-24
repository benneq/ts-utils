import { numberComparator } from "@benneq/comparator";
import { isSorted } from "./isSorted";

describe("array.isSorted", () => {
  it("should return true if Array is empty", () => {
    expect(isSorted(numberComparator)([])).toBe(true);
  });

  it("should return true if Array contains single element", () => {
    expect(isSorted(numberComparator)([0])).toBe(true);
  });

  it("should return true if Array is sorted", () => {
    expect(isSorted(numberComparator)([-1, 0, 5])).toBe(true);
  });

  it("should return false if Array is not sorted", () => {
    expect(isSorted(numberComparator)([1, 3, 2])).toBe(false);
  });
});

export {};
