/**
 * Chunks the elements of an {@link Iterable}.
 *
 * @remarks
 * Behavior for negative `chunkSize` is not defined.
 *
 * @example
 * Chunk in pairs
 * ```ts
 * const makePairs = chunk(2);
 * const pairs = makePairs([1,2,3,4,5]);
 * console.log(pairs); // [[1,2], [3,4], [5]]
 * ```
 *
 * @example
 * Chunk with fill
 * ```ts
 * const makePairs = chunk(2, 0);
 * const pairs = makePairs([1,2,3,4,5]);
 * console.log(pairs); // [[1,2], [3,4], [5,0]]
 * ```
 *
 * @see {@link concat}, {@link flatMap}, {@link pairwise} and {@link zip} for
 * similar operations.
 *
 * @privateRemarks
 * `...fill` is used to distinguish between `undefined` and "no value provided".
 *
 * @typeParam T - the {@link Iterable} value type
 * @param chunkSize - the chunk size
 * @param fill - the optional fill value
 * @returns The chunked {@link Iterable}
 */
export const chunk = <T>(chunkSize: number, ...fill: [] | [T]) => {
  if (process.env.NODE_ENV !== "production") {
    console.assert(chunkSize >= 1, "chunkSize must be >= 1");
  }

  return function* (
    iterable: Iterable<T>,
    buffer: T[] = []
  ): IterableIterator<T[]> {
    for (const value of iterable) {
      if (buffer.push(value) >= chunkSize) {
        yield buffer;
        buffer = [];
      }
    }

    // last buffer was complete
    if (!buffer.length) {
      return;
    }

    // fill remaining spaces if fill was provided
    if (fill.length) {
      while (buffer.push(fill[0]) < chunkSize);
    }

    yield buffer;
  };
};
