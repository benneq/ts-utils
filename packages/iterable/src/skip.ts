import { dropWhile } from "./dropWhile";

/**
 * Skip the first `n` elements of an {@link Iterable}.
 *
 * @remarks
 * Behavior for negative `skipSize` is not defined.
 *
 * @example
 * Skip the first 2 elements
 * ```ts
 * const skipFirst2 = skip(2);
 * const iterable = skipFirst2([1, 2, 3, 4]);
 * console.log(iterable); // [3, 4]
 * ```
 *
 * @see {@link dropWhile}, {@link limit} and {@link takeWhile} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param skipSize - the {@link number} of values to skip
 * @returns an {@link Iterable} that does not emit the first `skipSize` elements
 */
export const skip = <T>(
  skipSize: number
): ((iterable: Iterable<T>) => IterableIterator<T>) => {
  if (process.env.NODE_ENV !== "production") {
    console.assert(skipSize >= 0, "skipSize must be >= 0");
  }

  return dropWhile(() => !!skipSize--);
};
