/**
 *
 * @example
 * reduce((acc, val) => acc + val, 0)([1,2,3])
 *
 * @typeParam T - the {@link Iterable} value type
 * @typeParam U - the `reduce` result type
 * @param reducerFn
 * @param initialValue
 * @returns the reduced value
 */
export const reduce =
  <T, U>(
    reducerFn: (previousValue: U, currentValue: T) => U,
    initialValue: U
  ) =>
  (iterable: Iterable<T>): U => {
    for (const value of iterable) {
      initialValue = reducerFn(initialValue, value);
    }
    return initialValue;
  };
