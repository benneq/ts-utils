import { Comparator } from "./_types";

/**
 * Orders `number` values by their natural order, i.e. `-1` < `0` < `1`
 *
 * @example
 * numberComparator(1, 1) => 0
 * numberComparator(-2, 0) => -1
 * numberComparator(1, -1) => 1
 *
 * @param valueA
 * @param valueB
 * @returns a Comparator for number values
 */
export const numberComparator: Comparator<number> = (valueA, valueB) => {
  return valueA - valueB;
};
