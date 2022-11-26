import { isPromise } from "./isPromise";

describe("promise.isPromise", () => {
  it("should return true if the provided value is a Promise", () => {
    expect(isPromise(new Promise(() => {}))).toEqual(true);
    expect(isPromise(Promise.resolve(Symbol()))).toEqual(true);
    expect(
      isPromise(makePromise((_resolve, reject) => reject(Symbol())))
    ).toEqual(true);
  });

  it("should return false if the provided value is not a Promise", () => {
    expect(isPromise(undefined)).toEqual(false);
    expect(isPromise(null)).toEqual(false);
    expect(isPromise(NaN)).toEqual(false);
    expect(isPromise(0)).toEqual(false);
    expect(isPromise(true)).toEqual(false);
    expect(isPromise({})).toEqual(false);
    expect(isPromise("")).toEqual(false);
    expect(isPromise([])).toEqual(false);
    expect(isPromise(new Set())).toEqual(false);
    expect(isPromise(new Map())).toEqual(false);
    expect(isPromise(jest.fn())).toEqual(false);
  });
});

export {};
