import { insertAt } from "@benneq/array";
import { SortedSet } from "./_types";

/**
 * Adds a `value` to a {@link SortedSet} if it does not already contain an
 * equal value. Values are considered equal if the {@link Comparator} returns
 * `0`.
 *
 * @mutation
 *
 * @remarks
 * The values provided must be a sorted and unique.
 *
 * @example
 * ```ts
 * const sortedNumberSet = sortedSet(numberComparator);
 *
 * add(sortedNumberSet, 2);
 * add(sortedNumberSet, 0);
 * add(sortedNumberSet, [1, 2, 3]);
 *
 * console.log(sortedNumberSet.values); // [0, 1, 2, 3]
 * ```
 *
 * @param sortedSet - the {@link SortedSet} to add the `value` to
 * @param value - the value to add
 */
export const add = <T>(
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
      pointer++;
    }

    if (comparisonResult < 0) {
      insertAt(values, i, value);
      pointer++;
    }
  }

  values.push(...sortedSetValues.slice(pointer));
};
