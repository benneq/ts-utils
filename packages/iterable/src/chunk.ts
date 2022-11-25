/**
 * Chunks the elements of an {@link Iterable}.
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
 * @param fill - the fill value
 * @returns The chunked {@link Iterable}
 */
export const chunk = <T>(chunkSize: number, ...fill: [] | [T]) =>
  function* (iterable: Iterable<T>): Iterable<T[]> {
    let buffer: T[] = [];

    for (const value of iterable) {
      buffer.push(value);

      if (buffer.length >= chunkSize) {
        yield buffer;
        buffer = [];
      }
    }

    if (fill.length) {
      while (buffer.length < chunkSize) {
        buffer.push(fill[0]);
      }
    }

    if (buffer.length) {
      yield buffer;
    }
  };
