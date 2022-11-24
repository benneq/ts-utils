import { insertAt } from "@benneq/array";
import { SortedSet } from "./_types";

/**
 * Adds a `value` to a {@link SortedSet} if it does not already contain an
 * equal value. Values are considered equal if the {@link Comparator} returns
 * `0`.
 *
 * @example
 * ```ts
 * const sortedNumberSet = sortedSet(numberComparator);
 *
 * add(sortedNumberSet, 5);
 * add(sortedNumberSet, 3);
 * add(sortedNumberSet, 5);
 *
 * console.log(sortedNumberSet.values); // [3, 5]
 * ```
 *
 * @param sortedSet - the {@link SortedSet} to add the `value` to
 * @param value - the value to add
 */
export const add = <T>(sortedSet: SortedSet<T>, value: T): void => {
  for (let i = 0; i < sortedSet.values.length; i++) {
    const comparisonResult = sortedSet.comparator(
      value,
      sortedSet.values[i] as T
    );

    if (comparisonResult === 0) {
      return;
    }

    if (comparisonResult < 0) {
      if (i > -1) {
        insertAt(sortedSet.values, i, value);
      }

      return;
    }
  }

  sortedSet.values.push(value);
};
