import { isNull } from "@benneq/object";
import { numberComparator } from "./numberComparator";
import { predicateComparator } from "./predicateComparator";

describe("comparator.predicateComparator", () => {
  it("predicateComparator", () => {
    const comparator = predicateComparator(isNull, true)(numberComparator);
    expect([null, 3, null, 1, 2].sort(comparator)).toEqual([
      null,
      null,
      1,
      2,
      3,
    ]);
  });
});

export {};
