import { Predicate } from "@benneq/predicate";

/**
 * Omits the first elements from an {@link Iterable} until a {@link Predicate} returns `false`
 *
 * @example
 * dropWhile(x => x < 3)([]) => []
 * dropWhile(x => x < 3)([1,2]) => []
 * dropWhile(x => x < 3)([1,3,2,4]) => [3,2,4]
 *
 * @param predicate
 * @returns an {@link Iterable} that does not emit values until the given {@link Predicate} returns `false`
 */
export const dropWhile = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): Iterable<T> {
    let drop = true;

    for (const value of iterable) {
      if (!predicate(value)) {
        drop = false;
      }

      if (!drop) {
        yield value;
      }
    }
  };
