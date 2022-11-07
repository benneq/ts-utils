import { Entry } from "@benneq/object";
import { Comparator } from "./_types";

/**
 *
 * @example
 * entryKeyComparator(numberComparator)([1, 0], [0, 0]) => 1
 * entryKeyComparator(numberComparator)([1, 0], [1, 0]) => 0
 * entryKeyComparator(numberComparator)([0, 0], [1, 0]) => -1
 *
 * @param comparator
 * @returns a {@link Comparator} for Entry keys
 */
export const entryKeyComparator = <K, V>(
  comparator: Comparator<K>
): Comparator<Entry<K, V>> => {
  return ([keyA], [keyB]) => comparator(keyA, keyB);
};
