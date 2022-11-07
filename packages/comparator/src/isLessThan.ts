import { Comparator } from "./_types";

/**
 * Checks if `valueA` is less than `valueB`
 *
 * @example
 * ```
 * const isStringLessThan = isLessThan(stringComparator);
 * const b = isStringLessThan("aa", "ab");
 * console.log(b); // true
 * ```
 *
 * @returns `true` if `valueA` is less than `valueB`, otherwise `false`
 */
export const isLessThan =
  <T>(comparator: Comparator<T>) =>
  (valueA: T, valueB: T): boolean => {
    return comparator(valueA, valueB) < 0;
  };
