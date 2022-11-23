import { Comparator } from "./_types";

/**
 * Checks if `valueA` is less than `valueB` using a {@link Comparator}.
 *
 * @example
 * ```
 * const isStringLessThan = isLessThan(stringComparator);
 * const b = isStringLessThan("aa", "ab");
 * console.log(b); // true
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator - the {@link Comparator} to use
 * @returns `true` if `valueA` is less than `valueB`, otherwise `false`
 */
export const isLessThan =
  <T>(comparator: Comparator<T>) =>
  (valueA: T, valueB: T): boolean => {
    return comparator(valueA, valueB) < 0;
  };
