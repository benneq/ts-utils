import { numberComparator } from "@benneq/comparator";
import { add } from "./add";
import { remove } from "./remove";
import { sortedSet } from "./sortedSet";

describe("sortedset.remove", () => {
  it("should remove values where comparison result equals 0", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2, 3, 4, 5);

    remove(sortedNumberSet, 1, 2, 5);

    expect(sortedNumberSet.values).toEqual([3, 4]);
  });

  it("should not remove values that are less than the first value of the sorted set", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2);

    remove(sortedNumberSet, 0, 1);

    expect(sortedNumberSet.values).toEqual([2]);
  });

  it("should not modify the sorted set if it does not contain the values", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2);

    remove(sortedNumberSet, 4, 5);

    expect(sortedNumberSet.values).toEqual([1, 2]);
  });

  it("should not modify the sorted set if values array is empty", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 1, 2);

    remove(sortedNumberSet);

    expect(sortedNumberSet.values).toEqual([1, 2]);
  });
});

export {};
