import { Comparator } from "@benneq/comparator";
import { SortedSet } from "./_types";

/**
 * Creates a {@link SortedSet} using a {@link Comparator} for sorting the
 * values and checking for equality.
 *
 * @example
 * Create an empty {@link SortedSet} for numbers
 * ```ts
 * const sortedNumberSet = sortedSet(numberComparator);
 * console.log(sortedNumberSet.values); // []
 * ```
 *
 * @typeParam T - the {@link SortedSet} element type
 * @param comparator - the {@link Comparator} to use
 * @returns the created {@link SortedSet}
 */
export const sortedSet = <T>(comparator: Comparator<T>): SortedSet<T> => {
  return {
    comparator: comparator,
    values: [],
  };
};
