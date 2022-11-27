import { isMultiMap } from "./isMultiMap";
import { MultiMap } from "./multiMap";

describe("multimap.isMultiMap", () => {
  it("should return true if the provided value is a MultiMap", () => {
    expect(isMultiMap(new MultiMap())).toEqual(true);
    expect(isMultiMap(new MultiMap([["a", ["b"]]]))).toEqual(true);
    expect(isMultiMap(new MultiMap([[1, [true, null]]]))).toEqual(true);
  });

  it("should return false if the provided value is not a MultiMap", () => {
    expect(isMultiMap(undefined)).toEqual(false);
    expect(isMultiMap(null)).toEqual(false);
    expect(isMultiMap(NaN)).toEqual(false);
    expect(isMultiMap(0)).toEqual(false);
    expect(isMultiMap(true)).toEqual(false);
    expect(isMultiMap({})).toEqual(false);
    expect(isMultiMap("")).toEqual(false);
    expect(isMultiMap([])).toEqual(false);
    expect(isMultiMap(new Set())).toEqual(false);
    expect(isMultiMap(jest.fn())).toEqual(false);
    expect(isMultiMap(new Map())).toEqual(false);
  });
});

export {};
