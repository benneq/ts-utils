import { Tuple } from "@benneq/object";

/**
 * Iterates over the elements of an {@link Iterable} in pairs.
 *
 * @example
 * Iterate in pairs
 * ```ts
 * const iterable = [1, 2, 3];
 * const pairIterable = pairwise()(iterable);
 * console.log(pairIterable); // [[1,2], [2,3]]
 * ```
 *
 * @see {@link chunk} and {@link zip} for similar operations.
 *
 * @typeParam L - the length of the tuple
 * @param pairSize - the optional length of the emitted tuples
 * @returns the tuple emitting {@link Iterable}
 */
export const pairwise = <L extends number = 2>(pairSize: L = 2 as L) => {
  return function* <T>(iterable: Iterable<T>): Iterable<Tuple<T, L>> {
    let buffer: T[] = [];

    for (const value of iterable) {
      buffer.push(value);

      if (buffer.length >= pairSize) {
        yield buffer as Tuple<T, L>;
        buffer = buffer.slice(1);
      }
    }
  };
};
