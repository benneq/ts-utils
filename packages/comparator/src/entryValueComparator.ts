import { Entry } from "@benneq/object";
import { Comparator } from "./_types";

/**
 *
 * @example
 * entryValueComparator(numberComparator)([0, 1], [0, 0]) => 1
 * entryValueComparator(numberComparator)([0, 1], [0, 1]) => 0
 * entryValueComparator(numberComparator)([0, 0], [0, 1]) => -1
 *
 * @param comparator
 * @returns a Comparator for Entry values
 */
export const entryValueComparator = <K, V>(
  comparator: Comparator<V>
): Comparator<Entry<K, V>> => {
  return (valueA, valueB) => comparator(valueA[1], valueB[1]);
};
