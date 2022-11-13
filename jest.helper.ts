export function* symbolGeneratorFn() {
  let counter = 0;
  while (true) {
    yield Symbol(++counter);
  }
}

type ExpectIterableToEqualOptions = {
  toEqual?: boolean;
};

export const expectIterableToEqualFn = <T>(
  iterable: Iterable<T>,
  expected: ArrayLike<T>,
  { toEqual = false }: ExpectIterableToEqualOptions = {}
): void => {
  let i = 0;

  for (const value of iterable) {
    if (toEqual) {
      if (Array.isArray(value) && Array.isArray(expected[i])) {
        expect(value.length).toBe((expected[i] as any).length);
      }
      expect(value).toEqual(expected[i]);
    } else {
      expect(value).toBe(expected[i]);
    }

    if (i++ > 1000) {
      return;
    }
  }

  expect(expected.length).toBe(i);
};

/**
 * A function to wrap the Promise constructor such that no rejections are considered unhandled
 * by either Node or Jest. Whatever handlers can still be attached and rejections turned into
 * thrown exceptions where ever the returned promise is awaited.
 *
 * @see https://github.com/facebook/jest/issues/9210
 */
export function makePromiseFn<T>(
  executor: (
    resolve: (value: T | PromiseLike<T>) => void,
    reject: (reason?: any) => void
  ) => void
): Promise<T> {
  const promise = new Promise(executor);
  promise.catch(() => {});
  return promise;
}

global.symbolGenerator = symbolGeneratorFn;
global.expectIterableToEqual = expectIterableToEqualFn;
global.makePromise = makePromiseFn;

declare global {
  var symbolGenerator: typeof symbolGeneratorFn;
  var expectIterableToEqual: typeof expectIterableToEqualFn;
  var makePromise: typeof makePromiseFn;
}
