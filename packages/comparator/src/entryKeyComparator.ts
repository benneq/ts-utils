import { Entry } from "@benneq/object";
import { Comparator } from "./_types";

/**
 * Creates a {@link Comparator} for {@link Entry} keys.
 *
 * @example
 * entryKeyComparator(numberComparator)([1, 0], [0, 0]) => 1
 * entryKeyComparator(numberComparator)([1, 0], [1, 0]) => 0
 * entryKeyComparator(numberComparator)([0, 0], [1, 0]) => -1
 *
 * @typeParam K - the {@link Entry} key type
 * @typeParam V - the {@link Entry} value type
 * @param comparator
 * @returns a {@link Comparator} for {@link Entry} keys
 */
export const entryKeyComparator = <K, V>(
  comparator: Comparator<K>
): Comparator<Entry<K, V>> => {
  return ([keyA], [keyB]) => comparator(keyA, keyB);
};
