import { memoizePromise } from "./memoizePromise";

describe("promise.memoizePromise", () => {
  it("should return the cached value for the same argument", async () => {
    const [value, result] = symbolGenerator();

    const memoizedFn = memoizePromise<[symbol], symbol>(
      () => Promise.resolve(result),
      (value) => value
    );

    const result1 = await memoizedFn(value);
    expect(result1).toBe(result);

    const result2 = await memoizedFn(value);
    expect(result2).toBe(result);
  });

  it("should call the memoized function once if the key stays the same", async () => {
    const [value] = symbolGenerator();
    const fn = jest.fn((arg) => Promise.resolve(arg));

    const memoizedFn = memoizePromise<[symbol], symbol>(fn, (value) => value);

    await memoizedFn(value);
    await memoizedFn(value);

    expect(fn).toHaveBeenNthCalledWith(1, value);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

export {};
