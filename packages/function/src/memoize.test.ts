import { memoize } from "./memoize";

describe("function.memoize", () => {
  it("should return the cached value for the same argument", () => {
    const [value, result] = symbolGenerator();

    const memoizedFn = memoize(
      (_) => result,
      (value) => value
    );

    expect(memoizedFn(value)).toBe(result);
    expect(memoizedFn(value)).toBe(result);
  });

  it("should call the memoized function once if the key stays the same", () => {
    const [value, result] = symbolGenerator();
    const fn = jest.fn((_) => result);

    const memoizedFn = memoize(fn, (value) => value);

    memoizedFn(value);
    memoizedFn(value);

    expect(fn).toHaveBeenNthCalledWith(1, value);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

export {};
