import { Predicate } from "@benneq/predicate";

/**
 * Checks if any element of the provided Iterable matches the given Predicate
 *
 * @example
 * ```ts
 * const anyValueEven = some(x => x % 2);
 * const result = anyValueEven([1,2,3]);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate - the {@link Predicate} to match
 * @returns `true` if the given Predicate returns `true` for any element of the provided Iterable
 */
export const some =
  <T>(predicate: Predicate<[T]>) =>
  (iterable: Iterable<T>): boolean => {
    for (const e of iterable) {
      if (predicate(e)) {
        return true;
      }
    }
    return false;
  };
