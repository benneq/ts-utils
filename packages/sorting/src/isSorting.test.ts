import { isSorting } from "./isSorting";

describe("array.isSorting", () => {
  it("should return true if the provided value is Sorting", () => {
    expect(isSorting({ property: "", direction: "asc" })).toBe(true);
    expect(isSorting({ property: "", direction: "desc" })).toBe(true);
  });

  it("should return false if the provided value is not Sorting", () => {
    expect(isSorting({ property: "", direction: "" })).toBe(false);
    expect(isSorting("")).toBe(false);
    expect(isSorting(undefined)).toBe(false);
    expect(isSorting(null)).toBe(false);
    expect(isSorting(NaN)).toBe(false);
    expect(isSorting(0)).toBe(false);
    expect(isSorting(true)).toBe(false);
    expect(isSorting({})).toBe(false);
    expect(isSorting(new Set())).toBe(false);
    expect(isSorting(new Map())).toBe(false);
  });
});

export {};
