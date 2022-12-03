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
 * @see {@link concat}, {@link flatMap}, {@link pairwise} and {@link zip} for
 * similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param chunkSize - the chunk size
 * @returns The chunked {@link Iterable}
 */
type Chunk = <T>(
  chunkSiz: number
) => (iterable: Iterable<T>) => IterableIterator<T[]>;

export const chunk: Chunk = <T>(chunkSize: number) => {
  if (process.env.NODE_ENV !== "production") {
    console.assert(chunkSize >= 1, "chunkSize must be >= 1");
  }

  return function* (
    iterable: Iterable<T>,
    // internal variables:
    buffer: T[] = []
  ): IterableIterator<T[]> {
    for (const value of iterable) {
      if (buffer.push(value) >= chunkSize) {
        yield buffer;
        buffer = [];
      }
    }

    // last buffer was incomplete
    if (buffer.length) {
      yield buffer;
    }
  };
};
