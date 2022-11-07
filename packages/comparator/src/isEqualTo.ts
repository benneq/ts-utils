import { Comparator } from "./_types";

/**
 * Checks if `valueA` is equal to `valueB`
 *
 * @example
 * ```
 * const isStringEqualTo = isEqualTo(stringComparator);
 * const b = isStringEqualTo("abc", "abc");
 * console.log(b); // true
 * ```
 *
 * @returns `true` if `valueA` is equal to `valueB`, otherwise `false`
 */
export const isEqualTo =
  <T>(comparator: Comparator<T>) =>
  (valueA: T, valueB: T): boolean => {
    return !comparator(valueA, valueB);
  };
