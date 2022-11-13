import { jest } from "@jest/globals";
import { isPromiseLike } from "./isPromiseLike";

describe("promise.isPromiseLike", () => {
  it("should return true if the provided value is a PromiseLike object", () => {
    expect(isPromiseLike({ then: () => "" })).toEqual(true);
    expect(isPromiseLike(new Promise(() => {}))).toEqual(true);
    expect(isPromiseLike(Promise.resolve(Symbol()))).toEqual(true);
    expect(
      isPromiseLike(makePromise((_resolve, reject) => reject(Symbol())))
    ).toEqual(true);
  });

  it("should return false if the provided value is not a PromiseLike object", () => {
    expect(isPromiseLike(undefined)).toEqual(false);
    expect(isPromiseLike(null)).toEqual(false);
    expect(isPromiseLike(NaN)).toEqual(false);
    expect(isPromiseLike(0)).toEqual(false);
    expect(isPromiseLike(true)).toEqual(false);
    expect(isPromiseLike({})).toEqual(false);
    expect(isPromiseLike("")).toEqual(false);
    expect(isPromiseLike([])).toEqual(false);
    expect(isPromiseLike(new Set())).toEqual(false);
    expect(isPromiseLike(new Map())).toEqual(false);
    expect(isPromiseLike(jest.fn())).toEqual(false);
    expect(isPromiseLike({ then: "" })).toEqual(false);
  });
});

export {};
