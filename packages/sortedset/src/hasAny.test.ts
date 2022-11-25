import { numberComparator } from "@benneq/comparator";
import { add } from "./add";
import { hasAny } from "./hasAny";
import { sortedSet } from "./sortedSet";

describe("sortedset.hasAny", () => {
  it("should return true if the sorted set contains any of the values", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2, 3);

    expect(hasAny(sortedNumberSet, 0, 1, 4)).toBe(true);
  });

  it("should return false if sorted set is empty", () => {
    const sortedNumberSet = sortedSet(numberComparator);

    const result = hasAny(sortedNumberSet, 0);

    expect(result).toBe(false);
  });

  it("should return false if no values are given", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2, 3);

    const result = hasAny(sortedNumberSet);

    expect(result).toBe(false);
  });
});

export {};
