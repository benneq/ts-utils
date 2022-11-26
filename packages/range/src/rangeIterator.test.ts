import { numberComparator } from "@benneq/comparator";
import { OpenClosedRange } from "./openClosedRange";
import { rangeIterator } from "./rangeIterator";

describe("range.rangeIterator", () => {
  it("should always include from", () => {
    const range = new OpenClosedRange(numberComparator, 1, 3);

    const iterable = rangeIterator<number>((n) => n + 1)(range);

    expectIterableToEqual(iterable, [1, 2, 3]);
  });
});

export {};
