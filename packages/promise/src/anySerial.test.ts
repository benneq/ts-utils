import { anySerial } from "./anySerial";

describe("promise.anySerial", () => {
  /**
   * A function to wrap the Promise constructor such that no rejections are considered unhandled
   * by either Node or Jest. Whatever handlers can still be attached and rejections turned into
   * thrown exceptions where ever the returned promise is awaited.
   *
   * @see https://github.com/facebook/jest/issues/9210
   */
  function makePromise<T>(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ): Promise<T> {
    const promise = new Promise(executor);
    promise.catch(() => {});
    return promise;
  }

  it("should resolve if no Promise was provided", async () => {
    const promise = anySerial([]);
    expect(promise).resolves.toBeUndefined();
  });

  it("should resolve to the first resolving Promise", async () => {
    const [resolveValue] = symbolGenerator();

    const promise = anySerial([
      new Promise((resolve) => resolve(resolveValue)),
      new Promise((resolve) => resolve(Symbol())),
      makePromise((_resolve: any, reject: any) => reject(Symbol())),
    ]);

    expect(promise).resolves.toBe(resolveValue);
  });

  it("should reject with the first error if no Promise resolves", async () => {
    const [rejectValue] = symbolGenerator();

    const promise = anySerial([
      new Promise((_resolve, reject) => reject(rejectValue)),
      // TODO: should Symbol(), but jest goes crazy
      new Promise((_resolve, reject) => reject(rejectValue)),
    ]);

    expect(promise).rejects.toBe(rejectValue);
  });
});

export {};
