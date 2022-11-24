import { numberComparator } from "@benneq/comparator";
import { sortedSet } from "./sortedSet";

describe("sortedset.sortedSet", () => {
  it("should return an empty SortedSet", () => {
    const result = sortedSet(numberComparator);

    expect(result.comparator).toBe(numberComparator);
    expect(result.values).toEqual([]);
  });
});

export {};
