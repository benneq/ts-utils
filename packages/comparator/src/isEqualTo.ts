import { Comparator } from "./_types";

/**
 * Checks if `valueA` is equal to `valueB` using a {@link Comparator}.
 *
 * @example
 * ```
 * const isStringEqualTo = isEqualTo(stringComparator);
 * const result = isStringEqualTo("abc", "abc");
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator - the {@link Comparator} to use
 * @returns `true` if `valueA` is equal to `valueB`, otherwise `false`
 */
export const isEqualTo =
  <T>(comparator: Comparator<T>) =>
  (valueA: T, valueB: T): boolean => {
    return !comparator(valueA, valueB);
  };
