import { isEqualTo } from "./isEqualTo";
import { numberComparator } from "./numberComparator";

describe("comparator.isEqualTo", () => {
  it("should return true if a === b", () => {
    expect(isEqualTo(numberComparator)(1, 1)).toBe(true);
  });

  it("should return false if a !== b", () => {
    expect(isEqualTo(numberComparator)(1, 0)).toBe(false);
    expect(isEqualTo(numberComparator)(-1, 2)).toBe(false);
  });
});

export {};
