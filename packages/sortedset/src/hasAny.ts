import { SortedSet } from "./_types";

/**
 * Checks if a {@link SortedSet} contains any of the values.
 *
 * @remarks
 * The values provided must be a sorted and unique.
 *
 * @example
 * Does the `set` contain `0` or `2`?
 * ```ts
 * const set = sortedSet(numberComparator);
 * add(set, 1, 2, 3)
 * const result = hasAny(set, 0, 2);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link SortedSet} element type
 * @param sortedSet - the {@link SortedSet} to check
 * @param sortedSetValues - the values it should contain
 * @returns `true` if the {@link SortedSet} contains any of the values, otherwise `false`
 */
export const hasAny = <T>(
  { comparator, values }: SortedSet<T>,
  ...sortedSetValues: T[]
): boolean => {
  let i = 0;
  let pointer = 0;

  while (i < values.length && pointer < sortedSetValues.length) {
    const comparisonResult = comparator(
      sortedSetValues[pointer] as T,
      values[i] as T
    );

    if (comparisonResult === 0) {
      return true;
    }

    if (comparisonResult < 0) {
      pointer++;
    } else {
      i++;
    }
  }

  return false;
};
