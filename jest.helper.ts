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

global.symbolGenerator = symbolGeneratorFn;
global.expectIterableToEqual = expectIterableToEqualFn;

declare global {
  var symbolGenerator: typeof symbolGeneratorFn;
  var expectIterableToEqual: typeof expectIterableToEqualFn;
}
