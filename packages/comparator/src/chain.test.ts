import { booleanComparator } from "./booleanComparator";
import { chain } from "./chain";
import { mappingComparator } from "./mappingComparator";
import { numberComparator } from "./numberComparator";

describe("comparator.chain", () => {
  it("chain", () => {
    const value = [
      { b: true, i: 3 },
      { b: true, i: 1 },
      { b: false, i: 2 },
    ];
    expect(value.sort(chain())).toEqual(value);

    const comparator = chain<typeof value[number]>(
      mappingComparator(booleanComparator)((value) => value.b),
      mappingComparator(numberComparator)((value) => value.i)
    );

    expect(value.sort(comparator)).toEqual([
      { b: false, i: 2 },
      { b: true, i: 1 },
      { b: true, i: 3 },
    ]);
  });
});

export {};
