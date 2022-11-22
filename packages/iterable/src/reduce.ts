/**
 * Calls a callback function for all the elements in an {@link Iterable}. The
 * return value of the callback function is the accumulated result, and is
 * provided as an argument in the next call to the callback function.
 *
 * Works like {@link Array.prototype.reduce}.
 *
 * @example
 * Sum all numbers
 * ```ts
 * const sum = reduce((acc, curr) => acc + curr, 0);
 * const result = sum([1, 2, 3]);
 * console.log(result); // 6
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @typeParam U - the `reduce` result type
 * @param reducerFn - the reducer Fucntion
 * @param initialValue - the value for the first call of `reducerFn`
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
