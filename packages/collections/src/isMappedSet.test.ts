import { isMappedSet } from "./isMappedSet";
import { MappedSet } from "./mappedSet";

describe("collections.isMappedSet", () => {
  it("should return true if value is a SortedSet", () => {
    const value = new MappedSet((str: string) => str.length);

    expect(isMappedSet(value)).toBe(true);
  });

  it("should return false if value is not a SortedSet", () => {
    const value = new Set();

    expect(isMappedSet(value)).toBe(false);
  });
});

export {};
