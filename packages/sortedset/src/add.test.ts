import { numberComparator } from "@benneq/comparator";
import { add } from "./add";
import { sortedSet } from "./sortedSet";

describe("sortedset.add", () => {
  it("should add values at the right position to maintain the sorting", () => {
    const set = sortedSet(numberComparator);

    add(set, 5);
    expect(set.values).toEqual([5]);

    add(set, 7);
    expect(set.values).toEqual([5, 7]);

    add(set, 3);
    expect(set.values).toEqual([3, 5, 7]);

    add(set, 4);
    expect(set.values).toEqual([3, 4, 5, 7]);

    add(set, 6);
    expect(set.values).toEqual([3, 4, 5, 6, 7]);
  });

  it("should not add value if it is already in the sorted set", () => {
    const set = sortedSet(numberComparator);

    add(set, 5);
    add(set, 5);
    expect(set.values).toEqual([5]);
  });
});

export {};
