/**
 * Chunks the elements of an Iterable
 *
 * @example
 * ```ts
 * const makePairs = chunk(2);
 * const pairs = makePairs([1,2,3,4,5]);
 * console.log(pairs); // [[1,2], [3,4], [5]]
 * ```
 *
 * @param chunkSize the chunk size
 * @returns
 */
export const chunk = (chunkSize: number) =>
  function* <T>(iterable: Iterable<T>): Iterable<T[]> {
    let buffer: T[] = [];

    for (const value of iterable) {
      buffer.push(value);

      if (buffer.length === chunkSize) {
        yield buffer;
        buffer = [];
      }
    }

    if (buffer.length) {
      yield buffer;
    }
  };
