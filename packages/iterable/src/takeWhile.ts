import { Predicate } from "@benneq/predicate";

/**
 * Emits all elements of an {@link Iterable} while a {@link Predicate} matches.
 *
 * Terminates the {@link Iterable} when the {@link Predicate} returns `false`.
 *
 * @example
 * ```ts
 * const takeWhileLessThan3 = takeWhile(x => x < 3);
 * const iterable = takeWhileLessThan3([1,2,3,4]);
 * console.log(iterable); // [1,2]
 * ```
 *
 * @see {@link dropWhile}, {@link limit} and {@link skip} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate - the {@link Predicate} to match
 * @returns an {@link Iterable} that emits values until the {@link Predicate} returns `false`
 */
export const takeWhile = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): IterableIterator<T> {
    for (const value of iterable) {
      if (!predicate(value)) {
        return;
      }
      yield value;
    }
  };
