import { Predicate } from "@benneq/predicate";

/**
 * Emits all elements from the provided Iterable until the given Predicate does not match
 *
 * @example
 * ```ts
 * const takeWhileLessThan3 = takeWhile(x => x < 3);
 * const iterable = takeWhileLessThan3([1,2,3,4]);
 * console.log(iterable); // [1,2]
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate
 * @returns a Generator that emits values until the given Predicate returns `false`
 */
export const takeWhile = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): Iterable<T> {
    for (const value of iterable) {
      if (!predicate(value)) {
        return;
      }
      yield value;
    }
  };
