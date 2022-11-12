/**
 * Converts all elements of the provided Iterable to an Array
 *
 * @example
 * toArray([1,2,3]) => [1,2,3]
 *
 * @typeParam T - the {@link Iterable} value type
 * @param iterable
 * @returns an Array consisting of all elements of the provided Iterable
 */
export const toArray = <T>(iterable: Iterable<T>): T[] => {
  return Array.from(iterable);
};
