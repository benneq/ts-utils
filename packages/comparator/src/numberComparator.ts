import { Comparator } from "./_types";

/**
 * A {@link Comparator} that orders `number` values by their natural order, i.e. `-1 < 0 < 1`.
 *
 * @example
 * Sort an Array of number values
 * ```ts
 * const array = [3, 1, 2];
 * array.sort(numberComparator);
 * console.log(array); // [1, 2, 3]
 * ```
 *
 * @param valueA - the first number value
 * @param valueB - the second number value
 * @returns a {@link Comparator} for number values
 */
export const numberComparator: Comparator<number> = (valueA, valueB) => {
  return valueA - valueB;
};
