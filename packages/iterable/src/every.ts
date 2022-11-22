import { Predicate } from "@benneq/predicate";

/**
 * Checks if all elements of an {@link Iterable} match a {@link Predicate}.
 *
 * @example
 * ```ts
 * const allValuesEven = every(x => x % 2 === 0);
 * const result = allValuesEven([2,4,6]);
 * console.log(result); // true
 * ```
 *
 * @see {@link filter} and {@link some} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate - the {@link Predicate} to match
 * @returns `true` if the {@link Predicate} returns `true` for all elements
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
