import { Predicate } from "@benneq/predicate";

/**
 * Only emits elements from an {@link Iterable} that match the given {@link Predicate}
 *
 * @example
 * Filter even numbers
 * ```ts
 * const filterEven = filter(n => n % 2 === 0);
 * const iterable = [1,2,3,4];
 * const filteredIterable = filterEven(iterable);
 * console.log(filteredIterable); // [2,4]
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate
 * @returns an {@link Iterable} that only emits values for which the given {@link Predicate} returns `true`
 */
export const filter = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): Iterable<T> {
    for (const value of iterable) {
      if (predicate(value)) {
        yield value;
      }
    }
  };
