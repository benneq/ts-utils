export function* symbolGeneratorFn() {
  let counter = 0;
  while (true) {
    yield Symbol(++counter);
  }
}

export const expectIterableToEqualFn = <T>(
  iterable: Iterable<T>,
  expected: ArrayLike<T>
): void => {
  let i = 0;

  for (const value of iterable) {
    expect(value).toBe(expected[i]);

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
