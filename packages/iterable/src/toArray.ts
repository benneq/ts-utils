/**
 * Converts all elements of an {@link Iterable} to an {@link Array}
 *
 * @example
 * Convert {@link Iterable} to {@link Array}
 * ```ts
 * const iterable = [1, 2, 3];
 * const array = toArray(iterable);
 * console.log(array); // [1, 2, 3]
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param iterable - the {@link Iterable} to convert
 * @returns an Array consisting of all elements of the provided Iterable
 */
export const toArray = <T>(iterable: Iterable<T>): T[] => {
  return Array.from(iterable);
};
