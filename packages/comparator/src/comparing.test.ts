import { comparing } from "./comparing";
import { stringComparator } from "./stringComparator";

describe("comparator.comparing", () => {
  it("comparatorFor", () => {
    const value = [{ i: "3" }, { i: "1" }, { i: "2" }];

    const comparator = comparing(stringComparator())<typeof value[number]>(
      (value) => value.i
    );

    expect(value.sort(comparator)).toEqual([
      { i: "1" },
      { i: "2" },
      { i: "3" },
    ]);
  });
});

export {};
