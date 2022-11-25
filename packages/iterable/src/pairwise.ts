import { isUndefined } from "@benneq/object";

/**
 * Iterates over the elements of an {@link Iterable} in pairs.
 *
 * @example
 * Iterate in pairs
 * ```ts
 * const iterable = [1, 2, 3];
 * const pairIterable = pairwise(iterable);
 * console.log(pairIterable); // [[1,2], [2,3]]
 * ```
 *
 * @see {@link chunk} and {@link zip} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param iterable - the source {@link Iterabel}
 * @returns the pairwise {@link Iterable}
 */
export function* pairwise<T>(iterable: Iterable<T>): Iterable<[T, T]> {
  let prev = undefined;

  for (const value of iterable) {
    if (isUndefined(prev)) {
      prev = value;
      continue;
    }

    yield [prev, value];
    prev = value;
  }
}
