import { entryKeyComparator } from "./entryKeyComparator";
import { numberComparator } from "./numberComparator";

describe("comparator.entryKeyComparator", () => {
  it("should return 1 if key of valueA is greater than key of valueB", () => {
    expect(
      entryKeyComparator(numberComparator)([1, 0], [0, 0])
    ).toBeGreaterThan(0);
  });

  it("should return -1 if valueA is false and valueB is true", () => {
    expect(entryKeyComparator(numberComparator)([0, 0], [1, 0])).toBeLessThan(
      0
    );
  });

  it("should return 0 if both values are equal", () => {
    expect(entryKeyComparator(numberComparator)([0, 0], [0, 0])).toBe(0);
    expect(entryKeyComparator(numberComparator)([0, 1], [0, 0])).toBe(0);
  });
});

export {};
