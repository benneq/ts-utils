import { Tuple } from "@benneq/object";

/**
 * Creates a {@link Function} that returns a {@link Tuple} of {@link Iterable}s
 * with the given `length`, where each {@link Iterable} yields the same values
 * as the source {@link Iterable}, in the same order.
 *
 * @example
 * ```ts
 * const iterable = [1, 2, 3];
 * const [iterable1, iterable2] = tee(2)(iterable);
 * console.log(iterable1); // 1, 2, 3
 * console.log(iterable2); // 1, 2, 3
 * ```
 *
 * @param length - the length of the {@link Tuple}
 * @returns the tuple of {@link Iterable}s
 */
export const tee =
  <N extends number>(length: N) =>
  <T>(iterable: Iterable<T>): Tuple<IterableIterator<T>, N> => {
    const buffers = Array.from(
      { length: length },
      () => [] as Array<IteratorResult<T>>
    );

    const iterator = iterable[Symbol.iterator]();

    return buffers.map(function* (buffer) {
      while (true) {
        // if the buffer is empty, fetch a new value from the source iterable
        if (!buffer.length) {
          const result = iterator.next();
          for (const buffer of buffers) {
            buffer.push(result);
          }
        }

        // source iterable is done, no more values to come
        if ((buffer[0] as IteratorResult<T>).done) {
          return;
        }

        yield (buffer.shift() as IteratorResult<T>).value;
      }
    }) as Tuple<IterableIterator<T>, N>;
  };
