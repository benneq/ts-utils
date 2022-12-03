import { Predicate } from "@benneq/predicate";

/**
 * Only emits elements from an {@link Iterable} that match the given
 * {@link Predicate}.
 *
 * @example
 * Filter even numbers
 * ```ts
 * const filterEven = filter(isEven);
 * const iterable = [1,2,3,4];
 * const filteredIterable = filterEven(iterable);
 * console.log(filteredIterable); // [2,4]
 * ```
 *
 * @see {@link distinct}, {@link findFirst} and {@link first} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate - the {@link Predicate} to match
 * @returns an {@link Iterable} that only emits values for which the {@link Predicate} returns `true`
 */
export const filter = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): IterableIterator<T> {
    for (const value of iterable) {
      if (predicate(value)) {
        yield value;
      }
    }
  };
