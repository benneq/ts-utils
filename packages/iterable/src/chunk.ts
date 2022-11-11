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
export const chunk = <T>(chunkSize: number, ...fill: [] | [T]) =>
  function* (iterable: Iterable<T>): Iterable<T[]> {
    let buffer: T[] = [];

    for (const value of iterable) {
      buffer.push(value);

      if (buffer.length === chunkSize) {
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
