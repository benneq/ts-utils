import { isSortingDirection } from "./isSortingDirection";

describe("sorting.isSortingDirection", () => {
  it("should return true if the provided value is SortingDirection", () => {
    expect(isSortingDirection("asc")).toBe(true);
    expect(isSortingDirection("desc")).toBe(true);
  });

  it("should return false if the provided value is not SortingDirection", () => {
    expect(isSortingDirection("")).toBe(false);
    expect(isSortingDirection(undefined)).toBe(false);
    expect(isSortingDirection(null)).toBe(false);
    expect(isSortingDirection(NaN)).toBe(false);
    expect(isSortingDirection(0)).toBe(false);
    expect(isSortingDirection(true)).toBe(false);
    expect(isSortingDirection({})).toBe(false);
    expect(isSortingDirection(new Set())).toBe(false);
    expect(isSortingDirection(new Map())).toBe(false);
  });
});

export {};
