import { deleteAt } from "@benneq/array";
import { SortedSet } from "./_types";

/**
 * Removes `values` from a {@link SortedSet} if it does contain equal values.
 * Values are considered equal if the {@link Comparator} returns `0`.
 *
 * @mutation
 *
 * @remarks
 * The values provided must be a sorted and unique.
 *
 * @example
 * Remove values
 * ```ts
 * const sortedNumberSet = sortedSet(numberComparator);
 * add(sortedNumberSet, [1, 2, 3, 4, 5]);
 *
 * remove(sortedNumberSet, 0, 1, 2, 5)
 *
 * console.log(sortedNumberSet.values); // [3, 4]
 * ```
 *
 * @param sortedSet - the {@link SortedSet} to remove the `values` from
 * @param sortedSetValues - the values to remove
 */
export const remove = <T>(
  { comparator, values }: SortedSet<T>,
  ...sortedSetValues: T[]
): void => {
  let pointer = 0;

  for (let i = 0; i < values.length; i++) {
    if (pointer >= sortedSetValues.length) {
      break;
    }

    const value = sortedSetValues[pointer] as T;

    const comparisonResult = comparator(value, values[i] as T);

    if (comparisonResult === 0) {
      deleteAt(values, i);
      i--;
      pointer++;
    }

    if (comparisonResult < 0) {
      i--;
      pointer++;
    }
  }
};
