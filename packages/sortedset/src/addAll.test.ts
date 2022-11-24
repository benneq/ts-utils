import { numberComparator } from "@benneq/comparator";
import { add } from "./add";
import { addAll } from "./addAll";
import { sortedSet } from "./sortedSet";

describe("sortedset.addAll", () => {
  it("should add values at the right position to maintain the sorting", () => {
    const sortedNumberSet = sortedSet(numberComparator);
    add(sortedNumberSet, 0);
    add(sortedNumberSet, 2);

    addAll(sortedNumberSet, [1, 2, 3]);

    expect(sortedNumberSet.values).toEqual([0, 1, 2, 3]);
  });

  it("should not modify the sorted set if it already contains all values", () => {
    const set = sortedSet(numberComparator);
    add(set, 5);
    add(set, 4);

    addAll(set, [4, 5]);

    expect(set.values).toEqual([4, 5]);
  });

  it("should not modify the sorted set if values array is empty", () => {
    const set = sortedSet(numberComparator);
    add(set, 5);
    add(set, 4);

    addAll(set, []);

    expect(set.values).toEqual([4, 5]);
  });
});

export {};