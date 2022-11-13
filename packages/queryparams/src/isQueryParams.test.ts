import { jest } from "@jest/globals";
import { isQueryParams } from "./isQueryParams";

describe("queryparams.isQueryParams", () => {
  it("should return true if the provided value is a QueryParams object", () => {
    expect(isQueryParams(new Map())).toEqual(true);
    expect(isQueryParams(new Map([["a", ["b"]]]))).toEqual(true);
  });

  it("should return false if the provided value is not a QueryParams object", () => {
    expect(isQueryParams(undefined)).toEqual(false);
    expect(isQueryParams(null)).toEqual(false);
    expect(isQueryParams(NaN)).toEqual(false);
    expect(isQueryParams(0)).toEqual(false);
    expect(isQueryParams(true)).toEqual(false);
    expect(isQueryParams({})).toEqual(false);
    expect(isQueryParams("")).toEqual(false);
    expect(isQueryParams([])).toEqual(false);
    expect(isQueryParams(new Set())).toEqual(false);
    expect(isQueryParams(jest.fn())).toEqual(false);
    expect(isQueryParams(new Map([["a", "b"]]))).toEqual(false);
  });
});

export {};
