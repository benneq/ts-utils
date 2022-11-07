import { Comparator } from "./_types";

/**
 * A {@link Comparator} that orders `boolean` values by their natural order, i.e. `false < true`.
 *
 * @example
 * Sort an Array of boolean values
 * ```ts
 * const array = [true, false, true];
 * array.sort(booleanComparator);
 * console.log(array); // [false, true, true]
 * ```
 *
 * @param booleanA - the first boolean value
 * @param booleanB - the second boolean value
 * @returns a {@link Comparator} for boolean values
 */
export const booleanComparator: Comparator<boolean> = (booleanA, booleanB) => {
  return booleanA === booleanB ? 0 : booleanA ? 1 : -1;
};
