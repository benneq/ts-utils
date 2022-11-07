import { Comparator } from "./_types";

/**
 * Checks if `valueA` is greater than `valueB`
 *
 * @example
 * ```
 * const isStringGreaterThan = isGreaterThan(stringComparator);
 * const b = isStringGreaterThan("ab", "aa");
 * console.log(b); // true
 * ```
 *
 * @returns `true` if `valueA` is greater than `valueB`, otherwise `false`
 */
export const isGreaterThan =
  <T>(comparator: Comparator<T>) =>
  (valueA: T, valueB: T): boolean => {
    return comparator(valueA, valueB) > 0;
  };
