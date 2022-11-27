import { Tuple } from "@benneq/object";

/**
 * Iterates over the elements of an {@link Iterable} in pairs.
 *
 * @remarks
 * The behavior for `pairSize < 1` is not defined.
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
  if (process.env.NODE_ENV !== "production") {
    console.assert(pairSize >= 1, "pairSize must be >= 1");
  }

  return function* <T>(iterable: Iterable<T>): IterableIterator<Tuple<T, L>> {
    let buffer: T[] = [];

    for (const value of iterable) {
      if (buffer.push(value) >= pairSize) {
        yield buffer as Tuple<T, L>;
        buffer = buffer.slice(1);
      }
    }
  };
};
