import { mappingComparator } from "./mappingComparator";
import { stringComparator } from "./stringComparator";

describe("comparator.mappingComparator", () => {
  it("comparatorFor", () => {
    const value = [{ i: "3" }, { i: "1" }, { i: "2" }];

    const comparator = mappingComparator(stringComparator())<
      typeof value[number]
    >((value) => value.i);

    expect(value.sort(comparator)).toEqual([
      { i: "1" },
      { i: "2" },
      { i: "3" },
    ]);
  });
});

export {};
