import { Comparator } from "./_types";

/**
 * Checks if `valueA` is greater than `valueB` using a {@link Comparator}.
 *
 * @example
 * ```
 * const isStringGreaterThan = isGreaterThan(stringComparator);
 * const result = isStringGreaterThan("ab", "aa");
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator - the {@link Comparator} to use
 * @returns `true` if `valueA` is greater than `valueB`, otherwise `false`
 */
export const isGreaterThan =
  <T>(comparator: Comparator<T>) =>
  (valueA: T, valueB: T): boolean => {
    return comparator(valueA, valueB) > 0;
  };
