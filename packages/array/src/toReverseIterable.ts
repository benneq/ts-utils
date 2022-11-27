/**
 * Returns an {@link Iterable} that yields the elements of an {@link Array} in
 * reverse order.
 *
 * @example
 * ```ts
 * const array = [1, 2, 3];
 * const iterable = toReverseIterable(array);
 * for(const value of iterable) {
 *   console.log(value); // 3, 2, 1
 * }
 * ```
 *
 * @typeParam T - the {@link Array} element type
 */
export function* toReverseIterable<T>(
  array: ArrayLike<T>
): IterableIterator<T> {
  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i] as T;
  }
}
