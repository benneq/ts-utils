import { Predicate } from "@benneq/predicate";

/**
 * Checks if all elements of an {@link Iterable} match a {@link Predicate}
 *
 * @example
 * every(x => x > 0)([1,2,3,4]) => true
 * every(x => x > 2)([1,2,3,4]) => false
 *
 * @param iterable
 * @returns `true` if the {@link Predicate} returns `true` for all elements of the {@link Iterable}
 */
export const every =
  <T>(predicate: Predicate<[T]>) =>
  (iterable: Iterable<T>): boolean => {
    for (const e of iterable) {
      if (!predicate(e)) {
        return false;
      }
    }
    return true;
  };
