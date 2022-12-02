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
  array: ArrayLike<T>,
  i = array.length
): IterableIterator<T> {
  while (i) {
    yield array[--i] as T;
  }
}
