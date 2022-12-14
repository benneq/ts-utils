import { Predicate } from "@benneq/predicate";

/**
 * Checks if any element of an {@link Iterable} matches a {@link Predicate}.
 *
 * @example
 * Is any value even?
 * ```ts
 * const anyValueEven = some(x => x % 2);
 * const result = anyValueEven([1,2,3]);
 * console.log(result); // true
 * ```
 *
 * @see {@link every} and {@link filter} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate - the {@link Predicate} to match
 * @returns `true` if the {@link Predicate} returns `true` for any element
 */
export const some =
  <T>(predicate: Predicate<[T]>) =>
  (iterable: Iterable<T>): boolean => {
    for (const value of iterable) {
      if (predicate(value)) {
        return true;
      }
    }
    return false;
  };
