export function* symbolGenerator() {
  let counter = 0;
  while (true) {
    yield Symbol(++counter);
  }
}

export const expectIterableToEqual = <T>(
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
