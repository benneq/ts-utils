import { Entry } from "@benneq/object";
import { Comparator } from "./_types";

/**
 *
 * @example
 * entryValueComparator(numberComparator)([0, 1], [0, 0]) => 1
 * entryValueComparator(numberComparator)([0, 1], [0, 1]) => 0
 * entryValueComparator(numberComparator)([0, 0], [0, 1]) => -1
 *
 * @typeParam K - the {@link Entry} key type
 * @typeParam V - the {@link Entry} value type
 * @param comparator
 * @returns a {@link Comparator} for Entry values
 */
export const entryValueComparator = <K, V>(
  comparator: Comparator<V>
): Comparator<Entry<K, V>> => {
  return (entryA, entryB) => comparator(entryA[1], entryB[1]);
};
