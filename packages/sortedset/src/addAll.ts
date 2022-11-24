import { insertAt } from "@benneq/array";
import { numberComparator } from "@benneq/comparator";
import { sortedSet } from "./sortedSet";
import { SortedSet } from "./_types";

/**
 * Adds a `value` to a {@link SortedSet} if it does not already contain an
 * equal value. Values are considered equal if the {@link Comparator} returns
 * `0`.
 *
 * @example
 * ```ts
 * const sortedNumberSet = sortedSet(numberComparator);
 * add(sortedNumberSet, 0);
 * add(sortedNumberSet, 2);
 *
 * addAll(sortedNumberSet, [1, 2, 3]);
 *
 * console.log(sortedNumberSet.values); // [0, 1, 2, 3]
 * ```
 *
 * @param sortedSet - the {@link SortedSet} to add the `value` to
 * @param value - the value to add
 */
export const addAll = <T>(
  sortedSet: SortedSet<T>,
  sortedSetValues: T[]
): void => {
  let pointer = 0;

  for (let i = 0; i < sortedSet.values.length; i++) {
    if (pointer >= sortedSetValues.length) {
      break;
    }

    const value = sortedSetValues[pointer] as T;

    const comparisonResult = sortedSet.comparator(
      value,
      sortedSet.values[i] as T
    );

    if (comparisonResult === 0) {
      pointer++;
    }

    if (comparisonResult < 0) {
      insertAt(sortedSet.values, i, value);
      pointer++;
    }
  }

  sortedSet.values.push(...sortedSetValues.slice(pointer));
};
