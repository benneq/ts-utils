import { insertAt } from "@benneq/array";
import { SortedSet } from "./_types";

/**
 * Adds `values` to a {@link SortedSet} if it does not already contain equal
 * values. Values are considered equal if the {@link Comparator} returns `0`.
 *
 * @mutation
 *
 * @remarks
 * The values provided must be a sorted and unique.
 *
 * @example
 * Add values
 * ```ts
 * const sortedNumberSet = sortedSet(numberComparator);
 *
 * add(sortedNumberSet, 2);
 * add(sortedNumberSet, 0);
 * add(sortedNumberSet, 1, 2, 3);
 *
 * console.log(sortedNumberSet.values); // [0, 1, 2, 3]
 * ```
 *
 * @typeParam T - the {@link SortedSet} element type
 * @param sortedSet - the {@link SortedSet} to add the `value` to
 * @param sortedSetValues - the values to add
 */
export const add = <T>(
  { comparator, values }: SortedSet<T>,
  ...sortedSetValues: T[]
): void => {
  let i = 0,
    pointer = 0;

  while (i < values.length && pointer < sortedSetValues.length) {
    const value = sortedSetValues[pointer] as T;

    const comparisonResult = comparator(value, values[i] as T);

    if (comparisonResult <= 0) {
      if (comparisonResult < 0) {
        insertAt(values, i, value);
      }

      pointer++;
    }

    i++;
  }

  values.push(...sortedSetValues.slice(pointer));
};
