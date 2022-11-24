import { numberComparator } from "@benneq/comparator";
import { isSorted } from "./isSorted";

describe("iterable.isSorted", () => {
  it("should return true Iterable is empty", () => {
    expect(isSorted(numberComparator)([])).toBe(true);
  });

  it("should return true if Iterable contains single element", () => {
    expect(isSorted(numberComparator)([0])).toBe(true);
  });

  it("should return true if Iterable is sorted", () => {
    expect(isSorted(numberComparator)([-1, 0, 5])).toBe(true);
  });

  it("should return false if Iterable is not sorted", () => {
    expect(isSorted(numberComparator)([1, 3, 2])).toBe(false);
  });
});

export {};
