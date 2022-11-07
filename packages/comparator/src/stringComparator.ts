import { Comparator } from "./_types";

/**
 *
 * @example
 * Sort an Array of string values
 * ```ts
 * const array = ["ba", "aa", "ab"];
 * array.sort(stringComparator());
 * console.log(array); // ["aa", "ab", "ba"]
 * ```
 *
 * @param locales
 * @param options
 * @returns a {@link Comparator} for string values
 */
export const stringComparator = (
  locales?: string | string[],
  options?: Intl.CollatorOptions
): Comparator<string> => {
  return (valueA, valueB) => valueA.localeCompare(valueB, locales, options);
};
