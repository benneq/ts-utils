import { numberComparator } from "@benneq/comparator";
import { isSortedSet } from "./isSortedSet";
import { SortedSet } from "./sortedSet";

describe("collections.isSortedSet", () => {
  it("should return true if value is a SortedSet", () => {
    const value = new SortedSet(numberComparator);

    expect(isSortedSet(value)).toBe(true);
  });

  it("should return false if value is not a SortedSet", () => {
    const value = new Set();

    expect(isSortedSet(value)).toBe(false);
  });
});

export {};
