import { nullishFirst } from "./nullishFirst";
import { numberComparator } from "./numberComparator";

describe("comparator.nullishFirst", () => {
  it("should return 0 if both values are nullish", () => {
    const comparator = nullishFirst(numberComparator);
    expect(comparator(null, null)).toBe(0);
    expect(comparator(null, undefined)).toBe(0);
  });

  it("should return -1 if only the first value is nullish", () => {
    const comparator = nullishFirst(numberComparator);
    expect(comparator(null, 1)).toBe(-1);
    expect(comparator(undefined, 1)).toBe(-1);
  });

  it("should return 1 if only the second value is nullish", () => {
    const comparator = nullishFirst(numberComparator);
    expect(comparator(1, null)).toBe(1);
    expect(comparator(1, undefined)).toBe(1);
  });

  it("should return the result of the given comparator if both values are not nullish", () => {
    const result = 42;
    const comparator = nullishFirst(() => result);
    expect(comparator(Symbol(), Symbol())).toBe(result);
  });
});

export {};
