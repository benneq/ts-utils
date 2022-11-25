import { numberComparator } from "@benneq/comparator";
import { add } from "./add";
import { hasAll } from "./hasAll";
import { sortedSet } from "./sortedSet";

describe("sortedset.hasAll", () => {
  it("should return true if the sorted set contains all of the values", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2, 3, 4, 5);

    const result = hasAll(sortedNumberSet, 1, 3, 5);

    expect(result).toBe(true);
  });

  it("should return false if the sorted set does not contain all of the values", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2);

    const result = hasAll(sortedNumberSet, 0, 1, 3);

    expect(result).toBe(false);
  });

  it("should return true if no values are given", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2, 3);

    const result = hasAll(sortedNumberSet);

    expect(result).toBe(true);
  });
});

export {};
