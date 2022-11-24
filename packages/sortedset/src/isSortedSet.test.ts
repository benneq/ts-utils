import { numberComparator } from "@benneq/comparator";
import { sortedSet } from "./sortedSet";
import { isSortedSet } from "./isSortedSet";
import { add } from "./add";

describe("sortedset.isSortedSet", () => {
  it("should return true if value is a SortedSet", () => {
    const value = sortedSet(numberComparator);
    add(value, 1, 2);

    expect(isSortedSet(value)).toBe(true);
  });

  it("should return false if value is not a SortedSet", () => {
    const value = {
      comparator: numberComparator,
      values: [2, 1],
    };

    expect(isSortedSet(value)).toBe(false);
  });
});

export {};
