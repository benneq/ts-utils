import { Predicate } from "@benneq/predicate";

/**
 * Omits the first elements of an {@link Iterable} until a {@link Predicate}
 * returns `false`.
 *
 * @example
 * ```ts
 * const dropWhileLessThan3 = dropWhile(x => x < 3);
 * const iterable = dropWhileLessThan3([1,3,2,4]);
 * console.log(iterable); // [3,2,4]
 * ```
 *
 * @see {@link limit}, {@link skip} and {@link takeWhile} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate
 * @returns an {@link Iterable} that does not emit values until the given {@link Predicate} returns `false`
 */
type DropWhile = <T>(
  predicate: Predicate<[T]>
) => (iterable: Iterable<T>) => IterableIterator<T>;

export const dropWhile: DropWhile = (predicate) =>
  function* (
    iterable,
    // internal variables:
    drop = true
  ) {
    for (const value of iterable) {
      if (!predicate(value)) {
        drop = false;
      }

      if (!drop) {
        yield value;
      }
    }
  };
