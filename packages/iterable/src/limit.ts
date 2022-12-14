import { takeWhile } from "./takeWhile";

/**
 * Limit the elements of an {@link Iterable} to the first `n` elements.
 *
 * @remarks
 * Does not apply any limit if `maxSize` is negative.
 *
 * @example
 * Only emit the first `2` elements
 * ```ts
 * const limitTo2 = limit(2);
 * const iterable = limitTo2([1, 2, 3]);
 * console.log(iterable); // [1, 2]
 * ```
 *
 * @see {@link dropWhile}, {@link skip} and {@link takeWhile} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param maxSize - the {@link number} of maximum values to emit
 * @returns an {@link Iterable} that emits only the first `maxSize` elements
 */
export const limit = <T>(
  maxSize: number
): ((iterable: Iterable<T>) => IterableIterator<T>) => {
  return takeWhile(() => !!maxSize--);
};
